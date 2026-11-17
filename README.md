# Statistiche-commit-GitHub-README

🇮🇹 [Italiano](#italiano) | 🇬🇧 [English](#english)

> **🇮🇹 Nota sul fork:** questo repository è un fork personale di [MatteoMgr2008](https://github.com/MatteoMgr2008) del progetto open source [github-readme-activity-graph](https://github.com/Ashutosh00710/github-readme-activity-graph) di [Ashutosh Dwivedi](https://github.com/Ashutosh00710) e dei suoi contributori. Il fork è pubblicato su Vercel (`https://statistiche-commit-git-hub-readme.vercel.app`) e genera il grafico dei contributi ("🏅 My GitHub activity graph") mostrato nel README del mio profilo GitHub ([MatteoMgr2008/MatteoMgr2008](https://github.com/MatteoMgr2008/MatteoMgr2008)). Rispetto all'originale aggiunge il parametro opzionale `locale` (ad es. `locale=it`) per mostrare le etichette del grafico in italiano. Tutto il merito del progetto va agli autori originali; la documentazione qui sotto è quella del progetto upstream (in italiano tradotta, in inglese invariata).
>
> **🇬🇧 Fork note:** this repository is a personal fork by [MatteoMgr2008](https://github.com/MatteoMgr2008) of the open-source project [github-readme-activity-graph](https://github.com/Ashutosh00710/github-readme-activity-graph) by [Ashutosh Dwivedi](https://github.com/Ashutosh00710) and its contributors. The fork is deployed on Vercel (`https://statistiche-commit-git-hub-readme.vercel.app`) and generates the contribution graph ("🏅 My GitHub activity graph") shown on my GitHub profile README ([MatteoMgr2008/MatteoMgr2008](https://github.com/MatteoMgr2008/MatteoMgr2008)). Compared to the original it adds the optional `locale` parameter (e.g. `locale=it`) to show the graph labels in Italian. All credit for the project goes to the original authors; the documentation below is the upstream project's (translated in Italian, unchanged in English).

---

<a id="italiano"></a>
## 🇮🇹 Italiano

<p align="center">
    <img src="asset/logo.svg" height="150">
</p>

<h1 align="center">Github Readme Activity Graph</h1>

<a href="https://jb.gg/OpenSourceSupport">
<p align="center">
    <img src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg" height="150">
</p>
</a>
<h3 align="center"><a href="https://jb.gg/OpenSourceSupport">Supportato da JetBrains</a></h3>
Un grafico delle attività generato dinamicamente per mostrare le tue attività su GitHub degli ultimi 31 giorni.

### ⚠️ AVVISO: DEPLOYMENT SPOSTATO ⚠️

Il deployment ufficiale ora è `https://github-readme-activity-graph.vercel.app`. I deployment precedenti su `https://activity-graph.herokuapp.com` (piano gratuito di Heroku dismesso) e `https://github-readme-activity-graph.cyclic.app` (Cyclic.sh ha chiuso all'inizio del 2025) non sono più raggiungibili. Per maggiori dettagli vedi la [issue #197](https://github.com/Ashutosh00710/github-readme-activity-graph/issues/197#issuecomment-1560633754).

Fai riferimento al link aggiornato [qui](#it-come-usarlo)

<a id="it-indice"></a>
### Indice

- [Come usarlo](#it-come-usarlo)
    - [Attenzione ⚠](#it-attenzione)
- [Usare i temi](#it-usare-i-temi)
- [Temi disponibili](#it-temi-disponibili)
- [Personalizzazione](#it-personalizzazione)
    - [Opzioni comuni](#it-opzioni-comuni)
- [Deploy sulla tua istanza Replit](#it-deploy-replit)
    - [Segui i passaggi](#it-segui-i-passaggi)
- [Deploy sulla tua istanza Vercel](#it-deploy-vercel)
    - [Primo metodo](#it-primo-metodo)
    - [Secondo metodo](#it-secondo-metodo)
    - [Infine](#it-infine)
- [Contribuire](#it-contribuire)
- [Core Team 💻](#it-core-team)
- [Contributori ✨](#it-contributori)
- [Risorse usate per costruire questo progetto](#it-risorse)
- [Cronologia delle stelle](#it-cronologia-stelle)
    - [Fatto con ❤ e TypeScript](#it-fatto-con)

<a id="it-come-usarlo"></a>
### Come usarlo

Incolla semplicemente il seguente URL nel README del tuo profilo e hai finito.

**Passa il tuo `username` nell'URL**

```md
[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=Ashutosh00710)](https://github.com/ashutosh00710/github-readme-activity-graph)
```

<a id="it-attenzione"></a>
#### [Attenzione ⚠](#it-deploy-replit)

<a id="it-usare-i-temi"></a>
### Usare i temi

_`username=ashutosh00710&theme=theme_name`_

```md
[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=Ashutosh00710&theme=dracula)](https://github.com/ashutosh00710/github-readme-activity-graph)
```

È disponibile anche la [personalizzazione manuale](#it-personalizzazione)

<a id="it-temi-disponibili"></a>
### Temi disponibili

|            Nome            |                           Anteprima                            |
| :------------------------: | :------------------------------------------------------------: |
| **Default (cotton candy)** |    <img src="./asset/default.svg" height=250 alt="graph"/>     |
|         **react**          |     <img src="./asset/react.png" height=250 alt="graph"/>      |
|       **react-dark**       |   <img src="./asset/react-dark.svg" height=250 alt="graph"/>   |
|         **github**         |     <img src="./asset/github.svg" height=250 alt="graph"/>     |
|     **github-compact**     | <img src="./asset/github-compact.svg" height=250 alt="graph"/> |
|         **xcode**          |     <img src="./asset/xcode.svg" height=250 alt="graph"/>      |
|         **rogue**          |     <img src="./asset/rogue.svg" height=250 alt="graph"/>      |
|         **merko**          |     <img src="./asset/merko.png" height=250 alt="graph"/>      |
|          **vue**           |      <img src="./asset/vue.png" height=250 alt="graph"/>       |
|      **tokyo-night**       |  <img src="./asset/tokyo-night.png" height=250 alt="graph"/>   |
|     **high-contrast**      | <img src="./asset/high-contrast.png" height=250 alt="graph"/>  |

Per altri temi clicca [qui](https://github.com/Ashutosh00710/github-readme-activity-graph/blob/main/THEMES.md)

<a id="it-personalizzazione"></a>
### Personalizzazione

Personalizza l'aspetto del tuo grafico delle attività come preferisci tramite i parametri dell'URL.

<a id="it-opzioni-comuni"></a>
##### Opzioni comuni

|   Argomento    |                  Descrizione                  |                  Tipo di valore                  |
| :------------: | :-------------------------------------------: | :----------------------------------------------: |
|   `bg_color`   |         colore di sfondo della card           |             codice esadecimale (senza `#`)       |
| `border_color` |         colore del bordo della card           |             codice esadecimale (senza `#`)       |
|    `color`     |     colore del testo della card del grafico   |             codice esadecimale (senza `#`)       |
| `title_color`  |     colore del titolo della card del grafico  |             codice esadecimale (senza `#`)       |
|     `line`     |          colore della linea del grafico       |             codice esadecimale (senza `#`)       |
|    `point`     |  colore dei punti sul grafico a linee         |             codice esadecimale (senza `#`)       |
|  `area_color`  |       colore dell'area sotto il grafico       |             codice esadecimale (senza `#`)       |
|     `area`     |         mostra l'area sotto il grafico        |           booleano (predefinito: `false`)        |
| `hide_border`  |     rende trasparente il bordo del grafico    |           booleano (predefinito: `false`)        |
|  `hide_title`  |      imposta il titolo come stringa vuota     |           booleano (predefinito: `false`)        |
| `custom_title` |  imposta il titolo con una stringa qualsiasi  |                     stringa                      |
|    `theme`     |  nome di uno dei [temi disponibili](#it-temi-disponibili) |              stringa                 |
|    `radius`    |       raggio del bordo (arrotondamento) del grafico |       numero (da 0 a 16 inclusi)         |
|    `height`    |              altezza del grafico              |           numero (da 200 a 600 inclusi)          |
|     `days`     |  numero di giorni da mostrare nel grafico     | numero tra 1 e 90 [consigliato sotto i 40]       |
|     `from`     |     data da cui inizia il grafico             |              formato `YYYY-MM-DD`                |
|      `to`      |      data in cui termina il grafico           |              formato `YYYY-MM-DD`                |
|     `grid`     |                mostra la griglia              |           booleano (predefinito: `true`)         |

⚠ **Per `custom_title` assicurati di usare %20 al posto degli spazi**

Esempio:

**`custom_title=This%20is%20a%20title`**

```md
[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=ashutosh00710&custom_title=This%20is%20a%20title&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph)
```

**Esempio:**

```md
[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=ashutosh00710&bg_color=fffff0&color=708090&line=24292e&point=24292e&area=true&border_color=ff0000)](https://github.com/ashutosh00710/github-readme-activity-graph)
```

<a id="it-deploy-replit"></a>
### Deploy sulla tua istanza Replit

<details>
<summary><b>Istruzioni passo passo per il deploy su Replit (dall'interfaccia)</b></summary>

<a id="it-segui-i-passaggi"></a>
#### Segui i passaggi

1. Accedi a Replit o crea un nuovo account su https://replit.com
2. Clicca sul pulsante Deploy qui sotto

 <a href="https://repl.it/github/Ashutosh00710/github-readme-activity-graph">
   <img alt="Run on Repl.it" src="https://repl.it/badge/github/Ashutosh00710/github-readme-activity-graph" style="height: 40px; width: 190px;" />
 </a>

3. Nella pagina che si apre, scegli `Node.js` come linguaggio e poi clicca sul pulsante `Import from GitHub`

    ![Replit](./asset/replit1.png)

4. Visita [questo link](https://github.com/settings/tokens/new?description=GitHub%20Readme%20Activity%20Graph) per creare un nuovo Personal Access Token
5. Scorri fino in fondo e clicca su "**Generate token**"
6. Attendi la fine della clonazione e aggiungi nei `Secrets` il tuo `Github token`

    ![Secrets](./asset/replit2.png)

7. Clicca sul pulsante verde `RUN` in alto: la console si avvierà e alla fine l'URL comparirà sulla destra
8. Ora aggiungi semplicemente quanto segue al README del tuo profilo e hai finito

```
![Github Activity Graph](<url from step 5>/graph?username=<username>)
```

</details>

<a id="it-deploy-vercel"></a>
### Deploy sulla tua istanza Vercel

<details>
<summary><b>Istruzioni passo passo per il deploy su Vercel (dall'interfaccia)</b></summary>

<a id="it-primo-metodo"></a>
#### Primo metodo

1.  Vai su [vercel.com](https://vercel.com/).
2.  Clicca su `Log in`.
    ![image](https://user-images.githubusercontent.com/3431285/235332307-a98adccf-ac8e-4c05-8fae-b14e7d0b81e8.png)
3.  Accedi con GitHub premendo `Continue with GitHub`.
    ![image](https://user-images.githubusercontent.com/3431285/235332299-70f52a0f-ffb9-4070-ae85-a4646a2bb1bf.png)
4.  Accedi a GitHub e, se richiesto, consenti l'accesso a tutti i repository.
5.  Fai il fork di questo repository.
6.  Torna alla tua [dashboard di Vercel](https://vercel.com/dashboard).
7.  Per importare un progetto, clicca sul pulsante `Add New...` e seleziona l'opzione `Project`.
    ![image](https://user-images.githubusercontent.com/3431285/235332320-d80e62c9-a7d9-45f3-8bef-b8950c4c9093.png)
8.  Clicca sul pulsante `Continue with GitHub`, cerca il repository Git che ti serve e importalo cliccando sul pulsante `Import`.
    ![image](https://user-images.githubusercontent.com/3431285/235332373-3f28309c-d70b-490e-aa40-4d55ad429d5a.png)
9.  Crea un personal access token (PAT) [qui](https://github.com/settings/tokens/new) e abilita i permessi `repo` (così si possono vedere anche le statistiche dei repository privati).
    ![image](https://user-images.githubusercontent.com/3431285/235332420-df83a424-009b-4f69-bbb2-54e807bff701.png)
10. Aggiungi il PAT come variabile d'ambiente chiamata `TOKEN`.
    ![image](https://user-images.githubusercontent.com/3431285/235332471-6915abf8-04fe-4f5e-b734-191388a77140.png)
11. Clicca su deploy e hai finito. Guarda i tuoi domini per usare l'API!

<a id="it-secondo-metodo"></a>
#### Secondo metodo

In alternativa, clicca sul pulsante qui sotto e segui le istruzioni.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Ashutosh00710/github-readme-activity-graph)

Una volta completato il deploy:

1. Clicca sul pulsante `Continue to Dashboard`
   ![image](https://user-images.githubusercontent.com/3431285/235332677-addafd5f-dce8-4823-9927-05657eec2084.png)
2. Nella scheda `Settings`, clicca su `Environment Variables` e segui i passaggi `9.` e `10.` del `Primo metodo`.
   ![image](https://user-images.githubusercontent.com/3431285/235332731-03207969-b16e-42e4-858a-67b05af7bcc8.png)
3. Vai nella scheda `Deployments` e rifai il deploy del progetto.
   ![image](https://user-images.githubusercontent.com/3431285/235332761-1d3ae9c5-0138-447f-a41a-601c73ef3104.png)

<a id="it-infine"></a>
#### Infine

Ora aggiungi semplicemente quanto segue al README del tuo profilo e hai finito.

```md
![Github Activity Graph](<{your_own_domain_name}.vercel.app>/graph?username=<username>)
```

</details>

<a id="it-contribuire"></a>
### Contribuire

Leggi le nostre [linee guida per i contributi](https://github.com/Ashutosh00710/github-readme-activity-graph/blob/main/CONTRIBUTING.md). Contengono le indicazioni per aprire le issue, gli standard di scrittura del codice e note sullo sviluppo.

<a id="it-core-team"></a>
### Core Team 💻

<table>
    <tr>
        <td align="center">
        <a href="http://github.com/Ashutosh00710">
            <img src="https://avatars.githubusercontent.com/u/42907572?s=460&u=3c5c03fdddeec2483819b845bd549616d48b71e5&v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Ashutosh Dwivedi</b></sub>
        </a>
        <br />
        <a href="#projectManagement" title="Gestione del progetto">📆</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=ashutosh00710" title="Codice">💻</a>
        <a href="#documentation" title="Documentazione">📖</a>
        <a href="#ideas" title="Idee e pianificazione">🤔</a>
        <a href="#testing" title="Test">⚠</a>
    </td>
    <td align="center">
        <a href="http://github.com/kshitij978">
            <img src="https://avatars.githubusercontent.com/u/42491256?s=460&u=db0c5e26632c9f4917db50e714cd7552c1559ba8&v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Kshitij Srivastava</b></sub>
        </a>
        <br />
        <a href="#projectManagement" title="Gestione del progetto">📆</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=kshitij978" title="Codice">💻</a>
        <a href="#documentation" title="Documentazione">📖</a>
        <a href="#design" title="Design">🎨</a>
    </td>
    </tr>
</table>

<a id="it-contributori"></a>
### Contributori ✨

Un grazie a tutte queste fantastiche persone ([legenda delle emoji](https://allcontributors.org/docs/en/emoji-key)): l'elenco completo dei contributori, con foto e tipo di contributo, si trova nella sezione [Contributors ✨](#contributors-) della parte in inglese.

Questo progetto segue la specifica [all-contributors](https://github.com/all-contributors/all-contributors). Contributi di qualsiasi tipo sono i benvenuti!

<a id="it-risorse"></a>
### Risorse usate per costruire questo progetto

|        Scopo         | Nome della libreria |                   Link                    |
| :------------------: | :-----------------: | :---------------------------------------: |
| Costruzione del grafico |   **CHARTIST.JS**   | <https://github.com/gionkunz/chartist-js> |

</br>
<hr/>

<a id="it-cronologia-stelle"></a>
### Cronologia delle stelle

[![Star History Chart](https://api.star-history.com/svg?repos=Ashutosh00710/github-readme-activity-graph&type=Timeline)](https://star-history.com/#Ashutosh00710/github-readme-activity-graph&Timeline)

<a id="it-fatto-con"></a>
#### Fatto con ❤ e TypeScript <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" width="25">

---

<a id="english"></a>
## 🇬🇧 English

<p align="center">
    <img src="asset/logo.svg" height="150">
</p>

<h1 align="center">Github Readme Activity Graph</h1>

<a href="https://jb.gg/OpenSourceSupport">
<p align="center">
    <img src="https://resources.jetbrains.com/storage/products/company/brand/logos/jb_beam.svg" height="150">
</p>
</a>
<h3 align="center"><a href="https://jb.gg/OpenSourceSupport">Supported by JetBrains</a></h3>
A dynamically generated activity graph to show your GitHub activities of last 31 days.

### ⚠️ NOTICE: DEPLOYMENT MOVED ⚠️

The canonical deployment is now `https://github-readme-activity-graph.vercel.app`. Previous deployments at `https://activity-graph.herokuapp.com` (Heroku free tier discontinued) and `https://github-readme-activity-graph.cyclic.app` (Cyclic.sh shut down in early 2025) are no longer reachable. For background see [issue #197](https://github.com/Ashutosh00710/github-readme-activity-graph/issues/197#issuecomment-1560633754).

Please refer to the updated link [here](#how-to-use)

## Table of contents

- [Table of contents](#table-of-contents)
- [How to Use](#how-to-use)
    - [Attention ⚠](#attention-)
- [Use themes](#use-themes)
- [Available Themes](#available-themes)
- [Customization](#customization)
    - [Common Options](#common-options)
- [Deploy on your own Replit instance](#deploy-on-your-own-replit-instance)
    - [Follow the steps](#follow-the-steps)
- [Deploy on your own Vercel instance](#deploy-on-your-own-vercel-instance)
    - [First Method](#first-method)
    - [Second Method](#second-method)
    - [Finally](#finally)
- [Contributing](#contributing)
- [Core Team 💻](#core-team-)
- [Contributors ✨](#contributors-)
- [Resources Used to build this project](#resources-used-to-build-this-project)
- [Star History](#star-history)
    - [Made with ❤ and TypeScript ](#made-with--and-typescript-)

## How to Use

Just paste the following URL in your profile readme and you are good to go.

**Pass your `username` in the URL**

```md
[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=Ashutosh00710)](https://github.com/ashutosh00710/github-readme-activity-graph)
```

### [Attention ⚠](#deploy-on-your-own-replit-instance)

## Use themes

_`username=ashutosh00710&theme=theme_name`_

```md
[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=Ashutosh00710&theme=dracula)](https://github.com/ashutosh00710/github-readme-activity-graph)
```

[Manual Customization](#customization) is also available

## Available Themes

|            Name            |                            Preview                             |
| :------------------------: | :------------------------------------------------------------: |
| **Default (cotton candy)** |    <img src="./asset/default.svg" height=250 alt="graph"/>     |
|         **react**          |     <img src="./asset/react.png" height=250 alt="graph"/>      |
|       **react-dark**       |   <img src="./asset/react-dark.svg" height=250 alt="graph"/>   |
|         **github**         |     <img src="./asset/github.svg" height=250 alt="graph"/>     |
|     **github-compact**     | <img src="./asset/github-compact.svg" height=250 alt="graph"/> |
|         **xcode**          |     <img src="./asset/xcode.svg" height=250 alt="graph"/>      |
|         **rogue**          |     <img src="./asset/rogue.svg" height=250 alt="graph"/>      |
|         **merko**          |     <img src="./asset/merko.png" height=250 alt="graph"/>      |
|          **vue**           |      <img src="./asset/vue.png" height=250 alt="graph"/>       |
|      **tokyo-night**       |  <img src="./asset/tokyo-night.png" height=250 alt="graph"/>   |
|     **high-contrast**      | <img src="./asset/high-contrast.png" height=250 alt="graph"/>  |

For more themes click [here](https://github.com/Ashutosh00710/github-readme-activity-graph/blob/main/THEMES.md)

## Customization

Customize the appearance of your Activity Graph however you want with URL params.

#### Common Options

|   Arguments    |                  Description                  |                 Type of Value                  |
| :------------: | :-------------------------------------------: | :--------------------------------------------: |
|   `bg_color`   |            card's background color            |             hex code (without `#`)             |
| `border_color` |              card's border color              |             hex code (without `#`)             |
|    `color`     |            graph card's text color            |             hex code (without `#`)             |
| `title_color`  |           graph card's title color            |             hex code (without `#`)             |
|     `line`     |              graph's line color               |             hex code (without `#`)             |
|    `point`     |         color of points on line graph         |             hex code (without `#`)             |
|  `area_color`  |       color of the area under the graph       |             hex code (without `#`)             |
|     `area`     |          shows area under the graph           |           boolean (default: `false`)           |
| `hide_border`  |   makes the border of the graph transparent   |           boolean (default: `false`)           |
|  `hide_title`  |       sets the title to an empty string       |           boolean (default: `false`)           |
| `custom_title` |          set the title to any string          |                     string                     |
|    `theme`     | name of [available themes](#available-themes) |                     string                     |
|    `radius`    |            border radius of graph             |            number (0-16 inclusive)             |
|    `height`    |              height of the graph              |           number (200-600 inclusive)           |
|     `days`     |      number of to days display on graph       | number between (1 - 90) [Recommended below 40] |
|     `from`     |       date from which the graph starts        |              format `YYYY-MM-DD`               |
|      `to`      |         date where the graph will end         |              format `YYYY-MM-DD`               |
|     `grid`     |                   show grid                   |           boolean (default: `true`)            |

⚠ **For `custom_title` please make sure that you are using %20 for spaces**

Example:

**`custom_title=This%20is%20a%20title`**

```md
[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=ashutosh00710&custom_title=This%20is%20a%20title&hide_border=true)](https://github.com/ashutosh00710/github-readme-activity-graph)
```

**Example:**

```md
[![Ashutosh's github activity graph](https://github-readme-activity-graph.vercel.app/graph?username=ashutosh00710&bg_color=fffff0&color=708090&line=24292e&point=24292e&area=true&border_color=ff0000)](https://github.com/ashutosh00710/github-readme-activity-graph)
```

## Deploy on your own Replit instance

<details>
<summary><b>Step-by-step instructions for deploying to Replit (from UI)</b></summary>

#### Follow the steps

1. Sign in to Replit or create a new account at https://replit.com
2. Click the Deploy button below

 <a href="https://repl.it/github/Ashutosh00710/github-readme-activity-graph">
   <img alt="Run on Repl.it" src="https://repl.it/badge/github/Ashutosh00710/github-readme-activity-graph" style="height: 40px; width: 190px;" />
 </a>

3. On the page that comes up, choose language as `Node.js` and then click `Import from GitHub` Button

    ![Replit](./asset/replit1.png)

4. Visit [this link](https://github.com/settings/tokens/new?description=GitHub%20Readme%20Activity%20Graph) to create a new Personal Access Token
5. Scroll to the bottom and click "**Generate token**"
6. Wait clone done and add `Secrets` with your `Github token`

    ![Secrets](./asset/replit2.png)

7. Click the green `RUN` button on top, the console will run and at last the url will shows on the right
8. Now just add the following to your profile readme and you're good to go

```
![Github Activity Graph](<url from step 5>/graph?username=<username>)
```

</details>

## Deploy on your own Vercel instance

<details>
<summary><b>Step-by-step instructions for deploying to Vercel (from UI)</b></summary>

#### First Method

1.  Go to [vercel.com](https://vercel.com/).
2.  Click on `Log in`.
    ![image](https://user-images.githubusercontent.com/3431285/235332307-a98adccf-ac8e-4c05-8fae-b14e7d0b81e8.png)
3.  Sign in with GitHub by pressing `Continue with GitHub`.
    ![image](https://user-images.githubusercontent.com/3431285/235332299-70f52a0f-ffb9-4070-ae85-a4646a2bb1bf.png)
4.  Sign in to GitHub and allow access to all repositories if prompted.
5.  Fork this repo.
6.  Go back to your [Vercel dashboard](https://vercel.com/dashboard).
7.  To import a project, click the `Add New...` button and select the `Project` option.
    ![image](https://user-images.githubusercontent.com/3431285/235332320-d80e62c9-a7d9-45f3-8bef-b8950c4c9093.png)
8.  Click the `Continue with GitHub` button, search for the required Git Repository and import it by clicking the `Import` button.
    ![image](https://user-images.githubusercontent.com/3431285/235332373-3f28309c-d70b-490e-aa40-4d55ad429d5a.png)
9.  Create a personal access token (PAT) [here](https://github.com/settings/tokens/new) and enable the `repo` permissions (this allows access to see private repo stats).
    ![image](https://user-images.githubusercontent.com/3431285/235332420-df83a424-009b-4f69-bbb2-54e807bff701.png)
10. Add the PAT as an environment variable named `TOKEN`.
    ![image](https://user-images.githubusercontent.com/3431285/235332471-6915abf8-04fe-4f5e-b734-191388a77140.png)
11. Click deploy, and you're good to go. See your domains to use the API!

#### Second Method

Alternatively, click the button below and follow the instructions.

[![Deploy to Vercel](https://vercel.com/button)](https://vercel.com/import/project?template=https://github.com/Ashutosh00710/github-readme-activity-graph)

After the deployment is complete:

1. Click the `Continue to Dashboard` button
   ![image](https://user-images.githubusercontent.com/3431285/235332677-addafd5f-dce8-4823-9927-05657eec2084.png)
2. In the `Settings` tab, click on `Environment Variables` and follow steps `9.` and `10.` of `First Method`.
   ![image](https://user-images.githubusercontent.com/3431285/235332731-03207969-b16e-42e4-858a-67b05af7bcc8.png)
3. Go to `Deployments` tab and redeploy the project.
   ![image](https://user-images.githubusercontent.com/3431285/235332761-1d3ae9c5-0138-447f-a41a-601c73ef3104.png)

#### Finally

Now just add the following to your profile readme and you're good to go.

```md
![Github Activity Graph](<{your_own_domain_name}.vercel.app>/graph?username=<username>)
```

</details>

## Contributing

Please read through our [contributing guidelines](https://github.com/Ashutosh00710/github-readme-activity-graph/blob/main/CONTRIBUTING.md). Directions are included for opening issues, coding standards, and notes on development.

## Core Team 💻

<table>
    <tr>
        <td align="center">
        <a href="http://github.com/Ashutosh00710">
            <img src="https://avatars.githubusercontent.com/u/42907572?s=460&u=3c5c03fdddeec2483819b845bd549616d48b71e5&v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Ashutosh Dwivedi</b></sub>
        </a>
        <br />
        <a href="#projectManagement" title="Project Management">📆</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=ashutosh00710" title="Code">💻</a>
        <a href="#documentation" title="Documentation">📖</a>
        <a href="#ideas" title="Ideas & Planning">🤔</a>
        <a href="#testing" title="Testing">⚠</a>
    </td>
    <td align="center">
        <a href="http://github.com/kshitij978">
            <img src="https://avatars.githubusercontent.com/u/42491256?s=460&u=db0c5e26632c9f4917db50e714cd7552c1559ba8&v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Kshitij Srivastava</b></sub>
        </a>
        <br />
        <a href="#projectManagement" title="Project Management">📆</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=kshitij978" title="Code">💻</a>
        <a href="#documentation" title="Documentation">📖</a>
        <a href="#design" title="Design">🎨</a>
    </td>
    </tr>
</table>

## Contributors ✨

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center">
        <a href="https://github.com/tintindas">
            <img src="https://avatars.githubusercontent.com/u/47525983?s=460&u=0cedda5548e62fc342f32f89d230253cb8b9b099&v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Upamanyu Das</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=tintindas" title="Documentation">📖</a>
    </td>
    <td align="center">
        <a href="https://github.com/DenverCoder1">
            <img src="https://avatars.githubusercontent.com/u/20955511?s=460&u=5bbdbfe0199b05d6ca913fb799236c8beedcd192&v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Jonah Lawrence</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=DenverCoder1" title="Code">💻</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=DenverCoder1" title="Documentation">📖</a>
    </td>
    <td align="center">
        <a href="https://github.com/MilindModi">
            <img src="https://avatars.githubusercontent.com/u/28483876?s=460&v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Milind Modi</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=MilindModi" title="Documentation">📖</a>
    </td>
    <td align="center">
        <a href="https://github.com/Vaibhav-afk">
            <img src="https://avatars.githubusercontent.com/u/67143938?s=400&u=96dcbfcff0afcd5597a904181bc4cc309a4b22fa&v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Vaibhav</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=Vaibhav-afk" title="Code">💻</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=Vaibhav-afk" title="Documentation">📖</a>
    </td>
    <td align="center">
        <a href="https://github.com/jgphilpott">
            <img src="https://avatars.githubusercontent.com/u/4128208?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Jacob Philpott</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=jgphilpott" title="Code">💻</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=jgphilpott" title="Documentation">📖</a>
    </td>
    <td align="center">
        <a href="https://github.com/SonuKumar81800">
            <img src="https://avatars.githubusercontent.com/u/45717030?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Sonu Kumar</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=SonuKumar81800" title="Style">🎨</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=SonuKumar81800" title="Documentation">📖</a>
    </td>
    <td align="center">
        <a href="https://github.com/andinoriel">
            <img src="https://avatars.githubusercontent.com/u/36269798?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Mykola Symon</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=andinoriel" title="Code">💻</a>
    </td>
  </tr>
  <tr>
    <td align="center">
        <a href="https://github.com/sreyan-ghosh">
            <img src="https://avatars.githubusercontent.com/u/60854658?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Sreyan Ghosh</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=sreyan-ghosh" title="Style">🎨</a>
    </td>
    <td align="center">
        <a href="https://github.com/Anant-mishra1729">
            <img src="https://avatars.githubusercontent.com/u/84588156?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Anant Mishra</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=Anant-mishra1729" title="Style">🎨</a>
    </td>
    <td align="center">
        <a href="https://github.com/SKewLinez">
            <img src="https://avatars.githubusercontent.com/u/37243931?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Skyler</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=SKewLinez" title="Style">🎨</a>
    </td>
    <td align="center">
        <a href="https://github.com/eliely">
            <img src="https://avatars.githubusercontent.com/u/16717633?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Iryna Mykoliuk</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=eliely" title="Style">🎨</a>
    </td>
    <td align="center">
        <a href="https://github.com/DalpatRathore">
            <img src="https://avatars.githubusercontent.com/u/69510006?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Dalpat Rathore</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=DalpatRathore" title="Style">🎨</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=DalpatRathore" title="Code">💻</a>
    </td>
    <td align="center">
        <a href="https://github.com/fishmandev">
            <img src="https://avatars.githubusercontent.com/u/29619660?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>Dmitriy Fishman</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=fishmandev" title="Documentation">📖</a>
    </td>
    <td align="center">
        <a href="https://github.com/MagicLike">
            <img src="https://avatars.githubusercontent.com/u/82117109?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>MagicLike</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=MagicLike" title="Style">🎨</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=MagicLike" title="Code">💻</a>
    </td>
  </tr>
  </tr>
    <td align="center">
        <a href="https://github.com/OnkarRuikar">
            <img src="https://avatars.githubusercontent.com/u/87750369?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>OnkarRuikar</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=OnkarRuikar" title="Code">💻</a>
    </td>
    <td align="center">
        <a href="https://github.com/valetzx">
            <img src="https://avatars.githubusercontent.com/u/45054400?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>valetzx</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=valetzx" title="Documentation">📖</a>
    </td>
    <td align="center">
        <a href="https://github.com/tranthaituananh">
            <img src="https://avatars.githubusercontent.com/u/77098480?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>tranthaituananh</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=tranthaituananh" title="Style">🎨</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=tranthaituananh" title="Documentation">📖</a>
    </td>
    <td align="center">
        <a href="https://github.com/polekstulod">
            <img src="https://avatars.githubusercontent.com/u/38794173?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>polekstulod</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=polekstulod" title="Documentation">📖</a>
    </td>
    <td align="center">
        <a href="https://github.com/jmloudis">
            <img src="https://avatars.githubusercontent.com/u/70452698?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>jmloudis</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/pulls?q=author%3Ajmloudis+" title="Code">💻</a>
    </td>
    <td align="center">
        <a href="https://github.com/fabianocouto">
            <img src="https://avatars.githubusercontent.com/u/3431285?v=4" width="100px;" alt=""/>
            <br />
            <sub><b>fabianocouto</b></sub>
        </a>
        <br />
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=fabianocouto" title="Code">💻</a>
        <a href="https://github.com/Ashutosh00710/github-readme-activity-graph/commits?author=fabianocouto" title="Documentation">📖</a>
    </td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!

## Resources Used to build this project

|      Purpose       |  Library Name   |                   Link                    |
| :----------------: | :-------------: | :---------------------------------------: |
| Graph Construction | **CHARTIST.JS** | <https://github.com/gionkunz/chartist-js> |

</br>
<hr/>

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=Ashutosh00710/github-readme-activity-graph&type=Timeline)](https://star-history.com/#Ashutosh00710/github-readme-activity-graph&Timeline)

### Made with ❤ and TypeScript <img src="https://www.vectorlogo.zone/logos/typescriptlang/typescriptlang-icon.svg" width="25">
