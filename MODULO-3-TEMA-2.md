

# Módulo 3. Tema 2: Ferramentas de transferencia de arquivos

A publicación dunha páxina web non remata cando os ficheiros están creados no equipo local. Para que unha web estea dispoñible en Internet, hai que **transferir os seus arquivos ao servidor web**, actualizar os cambios cando sexa necesario e eliminar os ficheiros que xa non formen parte do proxecto.

Neste tema veremos como configurar ferramentas de transferencia, como conectarse a sistemas remotos e como subir, actualizar ou borrar arquivos dun sitio web.

---

## 2.1. Parámetros de configuración

As ferramentas de transferencia de arquivos precisan unha configuración previa para conectarse correctamente co servidor. Esta configuración indica **a que servidor queremos acceder, con que usuario, mediante que protocolo e en que cartafol se publicará a web**.

As ferramentas máis habituais son:

- **FileZilla**: cliente gráfico para FTP, FTPS e SFTP.
- **WinSCP**: cliente gráfico moi usado en Windows.
- **Cyberduck**: alternativa para macOS e Windows.
- **Terminal ou consola**: permite usar comandos como `ssh`, `scp`, `sftp` ou `rsync`.
- **Panel de hosting**: Plesk, cPanel ou ferramentas similares.

---

### 2.1.1. Parámetros xenéricos

Os parámetros xenéricos son os datos comúns que adoitan pedirse en calquera ferramenta de transferencia.

#### Servidor ou host

É o enderezo do servidor remoto. Pode ser un dominio ou unha IP.

```bash
exemplo.com
```

```bash
87.106.228.101
```

#### Usuario

É a conta autorizada para entrar no servidor.

```bash
curso-web
```

#### Contrasinal ou chave privada

A autenticación pode facerse mediante:

- **contrasinal**, habitual en FTP ou SFTP básico;
- **chave SSH**, máis segura e común en contornos profesionais.

#### Protocolo

O protocolo indica como se realiza a conexión.

| Protocolo | Uso principal | Seguridade |
|---|---|---|
| FTP | Transferencia clásica de arquivos | Baixa, non cifra os datos |
| FTPS | FTP con cifrado SSL/TLS | Máis seguro |
| SFTP | Transferencia sobre SSH | Seguro e moi recomendado |
| SCP | Copia segura por SSH | Seguro |
| Rsync | Sincronización avanzada | Seguro se usa SSH |

Actualmente é recomendable empregar **SFTP ou SSH**, xa que FTP transmite datos de forma menos segura se non vai cifrado.

#### Porto

O porto é a porta de entrada ao servizo.

```bash
FTP: 21
SFTP / SSH: 22
FTPS implícito: 990
```

Exemplo de conexión SFTP por porto 22:

```bash
sftp usuario@servidor.com
```

#### Directorio remoto

É o cartafol do servidor onde debe subirse a web.

Exemplos habituais:

```bash
/httpdocs
/public_html
/www
/var/www/html
```

En Plesk adoita usarse:

```bash
httpdocs
```

#### Directorio local

É o cartafol do noso equipo onde temos a web antes de subila.

```bash
/usuarios/ovi/proxectos/web-clase
```

En Windows podería ser:

```bash
C:\Users\Ovi\Desktop\web-clase
```

---

### 2.1.2. Parámetros específicos para diferentes servidores

Cada servidor pode ter particularidades propias. Non sempre se publica no mesmo cartafol nin se usan os mesmos permisos.

#### Servidor con Plesk

En Plesk, o cartafol habitual para publicar unha web é:

```bash
httpdocs
```

Se se usa Node.js, Angular ou outro sistema moderno, pode ser necesario subir só o resultado da compilación.

Nun proxecto Angular, o fluxo habitual sería:

```bash
npm install
ng build
```

Despois súbese ao servidor o contido xerado dentro de `dist/`.

#### Servidor con cPanel

En moitos hostings con cPanel, o cartafol principal adoita chamarse:

```bash
public_html
```

Todo o que se coloque aí será visible desde o navegador.

#### Servidor Linux propio

Nun servidor Linux configurado manualmente, o cartafol web pode estar en:

```bash
/var/www/html
```

Neste caso adoita ser importante comprobar permisos e propietario dos ficheiros.

#### Servidor Windows

Pode empregar IIS e rutas como:

```bash
C:\inetpub\wwwroot
```

A xestión de permisos é diferente á de Linux, xa que usa permisos propios do sistema Windows.

---

## 2.2. Conexión con sistemas remotos

Un sistema remoto é un equipo ao que accedemos a través dunha rede. No contexto da publicación web, normalmente é un **servidor de hosting**, un **VPS**, unha **máquina cloud** ou un **servidor interno dunha empresa**.

O obxectivo da conexión remota é poder consultar, subir, modificar ou eliminar arquivos sen estar fisicamente diante do servidor.

---

### 2.2.1. Descrición de sistemas remotos

Un sistema remoto pode ofrecer diferentes servizos.

#### Servidor FTP

Permite subir e baixar arquivos mediante FTP ou FTPS. É sinxelo, pero hoxe recoméndase empregar versións seguras.

#### Servidor SSH

Permite entrar no servidor mediante terminal. Con SSH podemos executar comandos, mover arquivos, cambiar permisos ou revisar configuracións.

```bash
ssh usuario@servidor.com
```

#### Servidor SFTP

Usa a infraestrutura de SSH, pero orientada á transferencia de arquivos. É unha das opcións máis recomendables para publicar sitios web.

#### Servidor Git

Permite despregar unha web a partir dun repositorio. En lugar de subir ficheiros un a un, publícase mediante comandos como:

```bash
git push
```

Este método é habitual en contornos profesionais, aínda que require unha configuración previa.

#### Servidores con panel visual

Ferramentas como Plesk ou cPanel permiten subir arquivos desde o navegador, crear contas FTP, xestionar certificados, dominios e bases de datos.

---

### 2.2.2. Ordes de conexión a sistemas remotos

A conexión pode facerse desde unha ferramenta gráfica ou desde terminal.

#### Conexión SSH

Permite acceder á terminal do servidor.

```bash
ssh usuario@servidor.com
```

Se o servidor usa un porto diferente:

```bash
ssh usuario@servidor.com -p 2222
```

#### Conexión SFTP

Permite entrar nun modo interactivo para transferir arquivos.

```bash
sftp usuario@servidor.com
```

Unha vez dentro, podemos usar comandos como:

```bash
ls
cd httpdocs
put index.html
get arquivo.html
exit
```

#### Conexión con SCP

Copia un ficheiro local ao servidor.

```bash
scp index.html usuario@servidor.com:/var/www/html/
```

Copia un cartafol completo.

```bash
scp -r web/ usuario@servidor.com:/var/www/html/
```

#### Conexión con Rsync

Sincroniza arquivos entre local e remoto.

```bash
rsync -avz web/ usuario@servidor.com:/var/www/html/
```

É máis eficiente ca `scp`, porque pode copiar só os cambios.

---

## 2.3. Operacións e comandos para transferir arquivos

Transferir arquivos significa mover ficheiros desde o equipo local ao servidor ou desde o servidor ao equipo local.

Nunha publicación web normal adoitan transferirse:

- arquivos HTML;
- follas CSS;
- scripts JavaScript;
- imaxes;
- fontes;
- vídeos ou documentos;
- cartafoles xerados por unha compilación;
- ficheiros de configuración, cando proceda.

---

### 2.3.1. Descrición de operacións de transferencia de arquivos

As operacións máis habituais son as seguintes.

#### Subir arquivos

Consiste en enviar ficheiros desde o equipo local ao servidor.

Exemplo con SFTP:

```bash
put index.html
```

Exemplo con SCP:

```bash
scp index.html usuario@servidor.com:/var/www/html/
```

#### Descargar arquivos

Consiste en traer ficheiros desde o servidor ao equipo local.

```bash
get index.html
```

#### Crear cartafoles

Serve para organizar os ficheiros no servidor.

```bash
mkdir assets
mkdir css
mkdir js
mkdir img
```

#### Navegar por cartafoles

Nunha sesión SFTP:

```bash
pwd
ls
cd httpdocs
```

- `pwd` mostra o cartafol actual.
- `ls` lista os ficheiros.
- `cd` cambia de cartafol.

#### Verificar a transferencia

Despois de subir arquivos cómpre comprobar que están no servidor e que funcionan no navegador.

```bash
ls -la
```

Despois abrimos a web:

```text
https://exemplo.com
```

---

### 2.3.2. Maneiras de transferir arquivos

#### Transferencia manual con cliente gráfico

É o método máis sinxelo para alumnado inicial.

Exemplo con FileZilla:

1. Introducir servidor, usuario, contrasinal e porto.
2. Conectar.
3. Abrir o cartafol local á esquerda.
4. Abrir o cartafol remoto á dereita.
5. Arrastrar os arquivos ao servidor.

#### Transferencia por terminal

É máis técnica, pero máis rápida e profesional.

```bash
scp -r web/ usuario@servidor.com:/var/www/html/
```

#### Sincronización

Consiste en actualizar o servidor comparando o que hai en local e en remoto.

```bash
rsync -avz --delete web/ usuario@servidor.com:/var/www/html/
```

O parámetro `--delete` elimina no servidor os ficheiros que xa non existen en local. Hai que usalo con coidado.

#### Despregamento con Git

En contornos actuais é frecuente publicar mediante Git.

```bash
git add .
git commit -m "Actualiza web"
git push
```

O servidor pode configurarse para actualizar automaticamente a web cando recibe os cambios.

#### Subida desde panel de hosting

En Plesk ou cPanel tamén se poden subir ficheiros desde o navegador. É útil para cambios pequenos, pero menos recomendable para proxectos grandes.

---

### 2.3.3. Fases para a transferencia de arquivos

#### 1. Preparar o proxecto local

Antes de subir, hai que revisar que o proxecto funciona correctamente no equipo.

Exemplo de estrutura:

```bash
index.html
css/
  estilos.css
js/
  main.js
img/
  logo.png
```

#### 2. Limpar ficheiros innecesarios

Non se deben subir ficheiros de traballo que non forman parte da web final.

Exemplos de ficheiros que normalmente non se publican:

```bash
.psd
.ai
.fig
node_modules/
.git/
README de traballo interno
```

Nun proxecto con Node ou Angular, non se sobe `node_modules`; súbese o resultado da compilación ou instálanse dependencias no servidor se o proxecto o require.

#### 3. Comprobar rutas

Hai que revisar que as rutas funcionan no servidor.

Exemplo correcto:

```html
<link rel="stylesheet" href="css/estilos.css">
```

Exemplo problemático:

```html
<link rel="stylesheet" href="/Users/ovi/Desktop/web/css/estilos.css">
```

A segunda ruta só funciona no equipo local, non no servidor.

#### 4. Conectar co servidor

Mediante FileZilla, WinSCP, SFTP, SSH ou outro método autorizado.

#### 5. Subir os ficheiros

Os ficheiros deben colocarse no cartafol correcto.

```bash
httpdocs
```

ou:

```bash
public_html
```

#### 6. Verificar no navegador

Hai que comprobar:

- que carga a páxina inicial;
- que funcionan os enlaces;
- que cargan imaxes, CSS e JavaScript;
- que non hai erros 404;
- que a versión publicada coincide coa local.

#### 7. Documentar a operación

Débese anotar que se subiu, cando, con que ferramenta e se houbo incidencias.

```text
Data: 01/07/2026
Ferramenta: FileZilla
Servidor: exemplo.com
Cartafol remoto: /httpdocs
Acción: subida de index.html, estilos.css e carpeta img
Comprobación: web cargada correctamente en Chrome e Firefox
Incidencias: ningunha
```

---

## 2.4. Operacións e comandos para actualizar e eliminar arquivos

Un sitio web non é algo estático. Despois da primeira publicación, é habitual ter que actualizar textos, substituír imaxes, modificar estilos, corrixir erros ou eliminar páxinas antigas.

A actualización debe facerse con orde, porque un erro nun ficheiro subido ao servidor pode deixar a web rota ou mostrar información incorrecta.

---

### 2.4.1. Descrición de operacións de actualización e borrado de arquivos

#### Actualizar arquivos

Actualizar consiste en substituír unha versión antiga por unha nova.

```bash
put estilos.css
```

Se xa existe un ficheiro co mesmo nome, a ferramenta preguntará se queremos sobrescribilo.

#### Renomear arquivos

Pode ser necesario cambiar o nome dun ficheiro.

```bash
rename antiga.html nova.html
```

#### Mover arquivos

Consiste en cambiar un ficheiro dun cartafol a outro.

```bash
mv imaxe.png img/imaxe.png
```

#### Eliminar arquivos

Consiste en borrar ficheiros que xa non son necesarios.

```bash
rm antiga.html
```

Para eliminar un cartafol baleiro:

```bash
rmdir carpeta
```

Para eliminar un cartafol con contido:

```bash
rm -r carpeta
```

Este comando debe usarse con moita precaución.

---

### 2.4.2. Fases para a actualización de arquivos

#### 1. Identificar que ficheiros cambiaron

Antes de subir nada, hai que saber que se modificou.

```bash
index.html
css/estilos.css
js/main.js
```

Se se traballa con Git, pódese comprobar con:

```bash
git status
```

#### 2. Facer copia de seguridade

Antes de substituír arquivos importantes, convén gardar unha copia.

```bash
cp index.html index-backup.html
```

Ou descargar a versión actual desde o servidor.

#### 3. Subir os novos ficheiros

Con SFTP:

```bash
put index.html
put css/estilos.css
```

Con SCP:

```bash
scp index.html usuario@servidor.com:/var/www/html/
```

Con Rsync:

```bash
rsync -avz web/ usuario@servidor.com:/var/www/html/
```

#### 4. Comprobar a web

Despois da actualización hai que verificar:

- páxina inicial;
- navegación;
- imaxes;
- CSS;
- JavaScript;
- formularios;
- enlaces internos;
- enlaces externos.

#### 5. Limpar caché se é necesario

Ás veces a web parece non actualizarse porque o navegador conserva unha versión antiga.

Pódese probar:

- recargar con `Ctrl + F5` en Windows;
- recargar con `Cmd + Shift + R` en macOS;
- abrir en xanela de incógnito;
- borrar caché do navegador;
- revisar a caché do servidor ou do CMS, se existe.

#### 6. Documentar a actualización

```text
Actualización realizada:
- Modificado index.html
- Actualizado css/estilos.css
- Substituída img/banner.jpg

Comprobación:
- Navegación correcta
- Sen erros 404
- Deseño correcto en escritorio e móbil
```

---

### 2.4.3. Fases para a eliminación de arquivos

Eliminar arquivos nun servidor require especial coidado. Un ficheiro eliminado por erro pode provocar que unha páxina deixe de funcionar.

#### 1. Identificar o ficheiro que se vai eliminar

```bash
promocion-antiga.html
```

#### 2. Comprobar se está enlazado

Antes de borralo, hai que revisar se algunha páxina apunta a ese ficheiro.

```html
<a href="promocion-antiga.html">Promoción</a>
```

Se existe unha ligazón, haberá que retirala ou redirixila.

#### 3. Facer copia de seguridade

Antes de borrar:

```bash
cp promocion-antiga.html promocion-antiga-backup.html
```

Ou descargala ao equipo local.

#### 4. Eliminar o ficheiro

Con SFTP:

```bash
rm promocion-antiga.html
```

Con SSH:

```bash
rm promocion-antiga.html
```

#### 5. Verificar a web

Hai que comprobar que non aparecen erros 404 nin ligazóns rotas.

#### 6. Documentar a eliminación

```text
Eliminado:
- promocion-antiga.html

Motivo:
- Contido obsoleto

Comprobación:
- Retirada a ligazón desde o menú
- Sen erros 404 detectados
```

---

## Exemplo práctico completo

Temos unha web local co seguinte contido:

```bash
web/
  index.html
  css/
    estilos.css
  js/
    main.js
  img/
    logo.png
```

Queremos subila ao servidor mediante `scp`.

```bash
scp -r web/* usuario@servidor.com:/var/www/html/
```

Despois conectamos por SSH:

```bash
ssh usuario@servidor.com
```

Entramos no cartafol publicado:

```bash
cd /var/www/html
```

Comprobamos os ficheiros:

```bash
ls -la
```

Se temos que actualizar só o CSS:

```bash
scp web/css/estilos.css usuario@servidor.com:/var/www/html/css/
```

Se temos que eliminar unha páxina antiga:

```bash
rm antiga.html
```

---

## Boas prácticas na transferencia de arquivos

1. Usar SFTP ou SSH sempre que sexa posible.
2. Non empregar FTP sen cifrado en servidores reais.
3. Non subir ficheiros innecesarios.
4. Revisar rutas relativas antes de publicar.
5. Facer copia de seguridade antes de sobrescribir ou eliminar.
6. Comprobar a web despois de cada subida.
7. Evitar permisos excesivos como `777`.
8. Documentar as accións realizadas.
9. Usar Git cando o proxecto medre.
10. Separar contorno local, probas e produción cando sexa posible.

---

## Erros habituais

### Subir ao cartafol incorrecto

Por exemplo, subir a `/` en vez de subir a:

```bash
/httpdocs
```

Resultado: a web non se ve no navegador.

### Esquecer ficheiros CSS ou JS

A páxina carga, pero sen estilos ou sen interactividade.

### Usar rutas locais

Erro típico:

```html
<img src="C:\Users\Ovi\Desktop\web\img\logo.png">
```

Debe usarse unha ruta relativa:

```html
<img src="img/logo.png" alt="Logotipo">
```

### Sobrescribir unha versión correcta

Antes de substituír ficheiros importantes, convén facer copia.

### Eliminar ficheiros sen comprobar enlaces

Pode provocar erros 404.

---

## Resumo

As ferramentas de transferencia de arquivos permiten publicar e manter unha web nun servidor. Para traballar correctamente hai que configurar a conexión, coñecer o protocolo empregado, acceder ao cartafol correcto, subir ou actualizar os ficheiros necesarios e comprobar o resultado no navegador.

Nun nivel básico pódese traballar con FileZilla ou WinSCP. Nun nivel máis profesional convén coñecer comandos como:

```bash
ssh
sftp
scp
rsync
```

A publicación web debe facerse sempre con seguridade, orde e documentación, xa que o obxectivo final é deixar a páxina operativa, actualizada e verificable para os usuarios.