# Système de CTA Flottant pour Prospection

## 📋 Vue d'ensemble

Un système simple et réutilisable de CTA (Call-To-Action) flottant a été implémenté pour les pages de prospection d'Atelier Douglas. Ce système permet de capturer les demandes de contact des prospects en visitant vos landing pages.

## 🎯 Pages intégrées

Le composant est intégré sur les 6 pages de prospection suivantes :

- `/camping`
- `/carnet-paysage`
- `/chaudronerie`
- `/conciergerie`
- `/industrial`
- `/paygagiste`

## 🔧 Fonctionnalités

### 1. Paramètre `leadId` depuis l'URL

Lors de l'envoi d'un email contenant un lien de prospection, vous pouvez ajouter un paramètre `leadId` :

```
https://atelierdouglas.fr/camping?leadId=notion-page-id-xxx
```

Le `leadId` correspond à l'ID de la page Notion du prospect et sera transmis dans l'email reçu.

### 2. Comportement du CTA flottant

- ⏱️ **Timing** : Apparaît automatiquement après **10 secondes** de présence sur la page
- 🎨 **Design** : Petit overlay discret en bas à droite (mobile) ou bas de l'écran
- 🔄 **Session** : Affiche **une seule fois par session** (utilise `sessionStorage`)
- ❌ **Fermeture** : Bouton de fermeture en haut à droite
- 📱 **Responsive** : Fonctionne parfaitement sur mobile et desktop

### 3. Deux modes de fonctionnement

#### Mode avec `leadId` (prospect identifié)

```
Si l'URL contient ?leadId=xxx:
  - Affiche le titre: "Votre site pourrait ressembler à ça."
  - Affiche le texte: "Vous souhaitez que je regarde ce qu'on pourrait améliorer sur votre site actuel ?"
  - Affiche un simple bouton: "Oui, ça m'intéresse"
  - Pas de formulaire supplémentaire
  - À la soumission: envoie directement une demande avec le leadId
```

#### Mode sans `leadId` (prospect anonyme)

```
Si l'URL ne contient pas de leadId:
  - Mêmes titre et texte
  - Affiche un champ email
  - Bouton: "Être recontacté"
  - Valide l'email avant envoi
  - À la soumission: envoie la demande avec l'email du prospect
```

### 4. Contenu de l'email reçu

L'API contact modifiée envoie les informations suivantes :

```
Nom : Prospect (leadId: xxx-xxx) ou Prospect
Email : email-du-prospect@example.com ou leadId
Activité : Prospect - [nom-de-la-page]
Téléphone : Non renseigné
Message : Demande de recontact depuis la page: https://atelierdouglas.fr/[page]
Lead ID : xxx-xxx (si présent)
Timestamp : Date et heure de la demande
```

### 5. État de confirmation

Après envoi réussi, le CTA affiche :

```
✓ C'est noté, je vous recontacte rapidement.
```

En cas d'erreur :

```
✗ Une erreur est survenue. Veuillez réessayer.
```

## 📦 Architecture technique

### Composant ProspectCTA

**Fichier** : `components/atelier/ProspectCTA.tsx`

**Props** :

- `pageName` (string) : Nom de la page (ex: "camping")
- `pageUrl` (string, optionnel) : URL complète de la page

**Fonctionnalités internes** :

- Récupère les query params avec `URLSearchParams`
- Détecte le `leadId` depuis l'URL
- Gère l'état du composant (hidden, visible, loading, success, error)
- Envoie à l'API `/api/contact`
- Utilise `sessionStorage` pour le suivi par session
- Animations fluides avec Tailwind CSS
- États de validation d'email simple

**Styles** :

- Utilise le design system existant (Button, inputClass de primitives.tsx)
- Animations légères avec `fade-in` et `slide-in-from-bottom-4`
- Icônes Lucide React (Check, X)
- Responsive avec classes Tailwind

### API Contact modifiée

**Fichier** : `app/api/contact/route.ts`

**Modifications** :

- Type `ContactRequestBody` inclut maintenant `leadId?: string`
- Ajoute le `leadId` au sujet du mail
- Affiche le `leadId` dans le corps de l'email
- Inclut un timestamp de la requête

**Requête POST esperée** :

```typescript
{
  name: string;
  email: string;
  message: string;
  activity?: string;
  phone?: string;
  leadId?: string;  // Nouveau
}
```

## 🚀 Utilisation

### Pour les prospects identifiés

Envoyez un lien email :

```
Bonjour [Prospect],

Regardez le projet similaire au vôtre :
https://atelierdouglas.fr/camping?leadId=abc123def456
```

Le prospect verra le CTA après 10 secondes, cliquera sur "Oui, ça m'intéresse", et vous recevrez une demande avec le `leadId` correspondant. Vous pourrez retrouver le prospect dans Notion grâce au `leadId`.

### Pour les prospects anonymes

Si un visiteur accède à la page sans `leadId`, il peut entrer son email pour être recontacté.

## 🎨 Personnalisation

Pour modifier le comportement, éditez `components/atelier/ProspectCTA.tsx` :

```typescript
// Délai avant affichage (en ms, actuellement 10000 = 10s)
setTimeout(() => {
  setState("visible");
  sessionStorage.setItem(sessionKey, "true");
}, 10000);  // ← Modifier ici

// Titre et texte du CTA
<h3>Votre site pourrait ressembler à ça.</h3>
<p>Vous souhaitez que je regarde ce qu'on pourrait améliorer sur votre site actuel ?</p>

// Boutons
<Button type="submit">{leadId ? "Oui, ça m'intéresse" : "Être recontacté"}</Button>

// Design (couleurs, taille, position)
<div className="fixed bottom-4 left-4 right-4 md:bottom-6 md:right-6 ...">
```

## ✅ Checklist de déploiement

- [x] Composant créé et testé
- [x] Intégré sur les 6 pages
- [x] API contact modifiée
- [x] Build successful
- [x] Validation email implémentée
- [x] SessionStorage pour session tracking
- [x] Responsive design
- [x] Animations fluides

## 🔍 Suivi et monitoring

Chaque demande envoyée inclut :

- Le `leadId` (si présent)
- L'URL complète de la page
- La date et l'heure exacte
- L'email du prospect (ou "Prospect" si anonyme)

**Important** : La fermeture du CTA (bouton X) ne génère pas de demande.

## 🛠️ Débogage

Si le CTA n'apparaît pas :

1. Vérifier la console du navigateur (F12) pour les erreurs
2. Vérifier que `sessionStorage` n'a pas déjà marqué la page comme visitée
3. Vérifier que le délai de 10 secondes s'est écoulé
4. Effacer `sessionStorage` dans les outils de dev du navigateur

Si l'email n'est pas reçu :

1. Vérifier la console du navigateur pour les erreurs de fetch
2. Vérifier que l'API `/api/contact` est accessible
3. Vérifier que les variables d'env `RESEND_API_KEY` sont configurées
4. Vérifier le domaine expéditeur dans la configuration Resend

## 📝 Notes techniques

- Le composant est "use client" car il utilise des hooks React
- L'URL et les query params sont lus depuis `window.location` (client-side uniquement)
- Le `sessionStorage` est utilisé au lieu de `localStorage` pour limiter à la session
- Pas de nouvelle base de données : tout passe par l'API email existante
- Réutilise les primitives UI existantes (Button, inputClass)
- Compatible avec Tailwind CSS et le système de design en place
