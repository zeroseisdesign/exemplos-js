# Tutorial práctico. Publicación dun proxecto Angular con Git, FTP/SFTP e Node.js en Plesk

## Obxectivo

Neste exercicio aprenderás que nun proxecto profesional non sempre se emprega unha única ferramenta para publicar unha aplicación web. Segundo o tipo de proxecto e os recursos dispoñibles no servidor, pode ser necesario combinar Git, FTP/SFTP, Node.js e o servidor web (Apache ou Nginx).

> **Caso práctico do curso:** No servidor Plesk utilizado durante as prácticas, a execución de `npm run build` desde a extensión de Node.js pode consumir demasiados recursos e quedar bloqueada. Por este motivo, realizaremos a compilación do proxecto Angular no equipo local e posteriormente publicaremos a carpeta `dist` mediante SFTP.

---

# 1. Fluxo de traballo recomendado

```text
Desenvolvemento local
        │
        ▼
Repositorio Git
        │
        ▼
Clonar ou actualizar o proxecto no servidor
        │
        ▼
Compilar Angular NO EQUIPO LOCAL
        │
        ▼
Carpeta dist/
        │
        ▼
Publicar dist mediante SFTP
        │
        ▼
Apache/Nginx publica a aplicación
```

---

# 2. Subir o código fonte mediante Git

Desde o equipo local:

```bash
git add .
git commit -m "Actualización do proxecto"
git push origin main
```

No servidor Plesk poderase actualizar o repositorio desde a ferramenta **Git** ou mediante:

```bash
git pull
```

> Git utilízase para manter sincronizado o código fonte e controlar o historial de cambios.

---

# 3. Compilar Angular no equipo local

Instalar dependencias:

```bash
npm install
```

Xerar a versión de produción:

```bash
npm run build
```

ou:

```bash
npx ng build --configuration production
```

Angular xerará unha estrutura similar a:

```text
dist/
└── nome-proxecto/
    └── browser/
        ├── index.html
        ├── assets/
        ├── *.js
        └── *.css
```

Esta é a versión preparada para publicar.

---

# 4. Publicar a carpeta dist mediante SFTP

1. Abrir FileZilla ou WinSCP.
2. Conectarse ao servidor mediante SFTP.
3. Acceder ao directorio `httpdocs`.
4. Copiar o contido da carpeta:

```text
dist/nome-proxecto/browser/
```

sobre:

```text
httpdocs/
```

> Non se copia normalmente a carpeta `dist`, senón o contido da carpeta `browser`, que será o que publique Apache ou Nginx.

---

# 5. Configuración de Node.js en Plesk

A extensión Node.js de Plesk é útil para:

- Instalar dependencias (`npm install`).
- Executar aplicacións Node.js.
- Publicar proxectos con SSR.

Non obstante, en servidores con poucos recursos é frecuente que:

```bash
npm run build
```

consuma demasiada memoria ou CPU e o proceso quede bloqueado.

Por este motivo, neste curso recoméndase:

1. Desenvolver e compilar localmente.
2. Utilizar Git para versionar o proxecto.
3. Publicar a carpeta `dist` mediante SFTP.

---

# 6. Cando é necesario Node.js en produción?

## Angular tradicional

Só se publican ficheiros HTML, CSS e JavaScript.

Non é necesario manter Node.js en execución.

Apache ou Nginx serven directamente os ficheiros estáticos.

## Angular con SSR

Se o proxecto utiliza Server Side Rendering:

- Será necesario Node.js.
- Haberá que configurar o ficheiro de inicio (`server.mjs` ou equivalente).
- A aplicación executarase como un servizo Node.

---

### Configuración da aplicación Node.js

Unha vez publicada a aplicación no servidor:

1. Acceder a **Sitios web e dominios → Node.js**.
2. Activar Node.js para o dominio.
3. Configurar os seguintes parámetros:

| Parámetro | Valor recomendado |
|-----------|-------------------|
| **Application root** | Cartafol onde se atopa a aplicación (por exemplo `httpdocs`) |
| **Document root** | `httpdocs` ou o cartafol público da aplicación |
| **Application mode** | `production` |
| **Node.js version** | A versión máis recente compatible co proxecto |
| **Application startup file** | `server.mjs` (ou `server.js`, segundo o proxecto) |

4. Gardar a configuración.
5. Pulsar **NPM Install** (se é necesario).
6. Reiniciar a aplicación desde **Restart App**.

### Exemplo dunha aplicación Angular SSR

Despois do proceso de compilación obterase unha estrutura similar a:

```text
dist/
└── nome-proxecto/
    ├── browser/
    └── server/
        └── server.mjs
```

Neste caso:

- O contido de **browser** publícase no servidor.
- O ficheiro **server.mjs** configúrase como **Application Startup File** en Plesk.
- Node.js executará a aplicación SSR mentres Apache ou Nginx actuarán como proxy cara ao servizo Node.

> **Importante:** No servidor empregado neste curso, a compilación (`npm run build`) realízase no equipo local debido ás limitacións de recursos. Posteriormente publícase a carpeta `dist` mediante SFTP e configúrase Node.js para executar o ficheiro `server.mjs`.

---

# Resumo

| Ferramenta | Función |
|------------|---------|
| Git | Control de versións e sincronización do código fonte |
| npm | Instalación de dependencias e compilación do proxecto |
| SFTP | Publicación da carpeta `dist` |
| Node.js | Execución de aplicacións SSR e tarefas JavaScript |
| Apache/Nginx | Servir a aplicación web aos usuarios |

## Conclusión

Nun contorno profesional adoitan combinarse varias ferramentas. Neste curso utilizarase un fluxo de traballo realista: Git para o código fonte, compilación local con Angular CLI e publicación da versión final mediante SFTP, evitando sobrecargar o servidor con tarefas de compilación.