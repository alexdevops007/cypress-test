# Cypress tests — project-2

Ce dépôt contient une petite suite de tests Cypress axée sur des scénarios de connexion (login). Le README ci‑dessous explique comment installer les dépendances, exécuter les tests et où se trouvent les specs.

## Auteur

Alex Simisi Nta

## Prérequis

- Node.js (version recommandée >= 14).
- npm (ou yarn / pnpm) pour installer les dépendances.
- Accès réseau si les tests ciblent des URL publiques.

## Installation

Ouvrez PowerShell dans le dossier racine du projet (par exemple `c:\Users\...\project-2`) puis installez les dépendances :

```pwsh
npm install
# ou
# yarn install
```

## Lancer les tests

- Ouvrir l'UI interactive (headed) :

```pwsh
npx cypress open
```

- Lancer les tests en mode headless (utile en CI) :

```pwsh
npx cypress run
```

- Exécuter une spec précise :

```pwsh
npx cypress run --spec "cypress/e2e/login-educ.cy.js"
npx cypress run --spec "cypress/e2e/login.cy.js"
```

Si des scripts npm personnalisés existent dans `package.json` (ex: `test`, `cypress:open`), utilisez `npm run <script>`.

## Structure du projet (points clés)

- `cypress/e2e/` : les specs. Exemple :
  - `login.cy.js` — tests pour `https://practice.expandtesting.com/notes/app/login`.
  - `login-educ.cy.js` — tests pour `https://e-educ-corr-frontend.vercel.app`.
- `cypress/support/commands.js` : commandes personnalisées (par ex. `cy.login`).
- `cypress/fixtures/` : données de test réutilisables.

## Bonnes pratiques recommandées

- Centraliser les sélecteurs et créer des helpers réutilisables pour réduire la duplication.
- Extraire les données sensibles (mots de passe) hors des specs et utiliser des fixtures ou des variables d'environnement sécurisées.
- Utiliser `cy.intercept` pour stubber ou mocker les appels réseau quand on veut rendre les tests déterministes.
- Ajouter des assertions explicites sur les messages d'erreur et les états UI.

## Dépannage rapide

- Si Cypress n'arrive pas à s'ouvrir : vérifiez la version de Node et réinstallez les modules (`npm ci`).
- Tests intermittents : vérifier les dépendances réseau, ajouter des `cy.intercept` ou utiliser des attentes sur des alias réseau plutôt que des `cy.wait` non spécifiques.
- Si une spec pointe vers une URL distante, assurez-vous que l'URL est joignable depuis votre machine.

## Notes

- Certains fichiers de la suite utilisent une commande personnalisée `cy.login(email, password)` définie dans `cypress/support/commands.js`. Vérifiez ce fichier si vous souhaitez modifier la logique de connexion.

---

Pour toute amélioration ou ajout de tests, modifiez les fichiers sous `cypress/e2e/` et exécutez `npx cypress open` pour itérer rapidement.
