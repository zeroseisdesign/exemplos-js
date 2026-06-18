## Exercicio 1. Publicación dunha landing page mediante FTP en Plesk

### Obxectivo
Crear unha pequena landing page e publicala nun dominio ou subdominio utilizando unha conta FTP creada en Plesk.

### Tarefas

#### 1. Crear un subdominio
- Crear o subdominio:
  - landing.alumno.local
  - ou outro nome asignado polo profesor.
- Verificar que responde correctamente desde o navegador.

#### 2. Crear un usuario FTP
- Acceder a Plesk.
- Crear un novo usuario FTP.
- Asignar acceso unicamente ao directorio do subdominio.
- Definir un contrasinal seguro.

#### 3. Desenvolver a landing
A páxina debe incluír:
- Logo ou imaxe principal.
- Título principal (h1).
- Subtítulo.
- Tres bloques de características.
- Un botón de chamada á acción.
- Pé de páxina.

#### 4. Estrutura mínima

landing/
├── index.html
├── css/
│   └── estilos.css
├── img/
│   ├── logo.png
│   └── hero.jpg
└── js/
    └── app.js

#### 5. Publicación
- Configurar un cliente FTP (FileZilla ou similar).
- Subir todos os ficheiros.
- Comprobar que:
  - As imaxes cargan correctamente.
  - O CSS funciona.
  - Non existen erros 404.

### Entregables
- Captura da configuración FTP.
- Captura do cliente FTP conectado.
- URL da landing publicada.


## Exercicio 2. Despregamento mediante Git en Plesk

### Obxectivo
Publicar unha web usando un repositorio Git conectado directamente a Plesk.

### Tarefas

#### 1. Crear un repositorio Git

Crear un repositorio local chamado:

landing-git

Inicializalo:

git init

#### 2. Crear a web

A páxina deberá incluír:
- Menú de navegación.
- Hero principal.
- Sección de servizos.
- Galería con 4 imaxes.
- Formulario de contacto.
- Footer.

#### 3. Primeira versión

Realizar:

git add .
git commit -m "Versión inicial"

#### 4. Configurar Git en Plesk

- Acceder á sección Git.
- Crear repositorio.
- Conectar o repositorio local ou remoto.
- Configurar o directorio de publicación.

#### 5. Publicar

Realizar un push.

git push

#### 6. Actualización

Modificar:
- Cor principal.
- Texto do hero.
- Unha nova sección de clientes.

Realizar:

git add .
git commit -m "Actualización da landing"
git push

### Entregables

- URL do repositorio.
- Captura da configuración Git en Plesk.
- URL da web publicada.
- Historial de commits.


## Exercicio 3. Fluxo profesional: Desenvolvemento, Git e FTP en Plesk

### Obxectivo
Simular un pequeno proxecto real cunha contorna de produción.

### Escenario

Un cliente solicita unha landing para promocionar un curso de desenvolvemento web.

### Tarefas

#### 1. Crear a estrutura

curso-web/
├── index.html
├── css/
├── js/
├── img/
└── docs/

#### 2. Crear repositorio Git

git init

Realizar polo menos:
- Commit inicial.
- Commit de estilos.
- Commit de contidos.
- Commit final.

#### 3. Crear usuario FTP específico

En Plesk:
- Usuario FTP independente.
- Acceso limitado ao directorio do proxecto.
- Documentar os permisos configurados.

#### 4. Desenvolver a landing

Debe incluír:
- Hero con imaxe.
- Programa do curso.
- Táboa de prezos.
- Testemuños.
- Formulario de inscrición.
- Animación CSS nun botón ou tarxeta.

#### 5. Despregamento mediante Git

Publicar a versión principal usando Git.

#### 6. Actualización de emerxencia mediante FTP

O profesor facilitará un cambio urxente.

Exemplo:
- Modificar un teléfono.
- Corrixir unha falta ortográfica.
- Cambiar unha imaxe.

O alumno deberá:
- Conectarse por FTP.
- Actualizar o ficheiro.
- Verificar o cambio en produción.

#### 7. Sincronización

Actualizar posteriormente o repositorio Git para que coincida coa modificación realizada por FTP.

### Entregables

- URL da web.
- Captura da conta FTP creada.
- Captura da configuración Git en Plesk.
- Historial completo de commits.
- Documento explicando:
  - Diferenzas entre FTP e Git.
  - Vantaxes e inconvenientes de cada método.
  - Situacións nas que usarían cada un.