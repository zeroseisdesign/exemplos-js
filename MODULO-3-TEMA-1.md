

# MÓDULO 3. PUBLICACIÓN DE PÁXINAS WEB

## Tema 1. Características de seguridade na publicación de páxinas web

### Obxectivos

Ao finalizar este tema serás capaz de:

- Comprender os principios básicos de seguridade nun servidor web.
- Identificar os sistemas de ficheiros máis habituais.
- Xestionar permisos de acceso a ficheiros e cartafoles.
- Crear, modificar e eliminar estruturas de almacenamento.
- Aplicar boas prácticas de seguridade durante a publicación dun sitio web.

---

# 1. Introdución á seguridade na publicación web

Publicar unha páxina web non consiste só en copiar ficheiros a un servidor. Tamén é necesario garantir que os usuarios autorizados poidan acceder aos recursos adecuados e que os datos estean protexidos fronte a accesos non permitidos.

Os principais aspectos de seguridade son:

- Control de acceso aos ficheiros.
- Protección dos datos do sitio web.
- Integridade da información.
- Prevención de modificacións non autorizadas.
- Copias de seguridade.

### Exemplo

Un ficheiro de configuración que contén os datos de acceso á base de datos non debería ser accesible desde Internet.

---

# 2. Seguridade nos sistemas de ficheiros

Un sistema de ficheiros é o mecanismo utilizado polo sistema operativo para organizar e almacenar información.

## 2.1. Sistema operativo Linux

É o máis utilizado nos servidores web actuais.

### Características

- Estrutura xerárquica baseada en cartafoles.
- Diferencia entre maiúsculas e minúsculas.
- Sistema avanzado de permisos.
- Alta estabilidade e seguridade.

### Estrutura habitual

```text
/var/www/html
├── index.html
├── css
├── js
└── images
```

### Comandos básicos

Crear cartafol:

```bash
mkdir proxecto
```

Crear ficheiro:

```bash
touch index.html
```

Eliminar ficheiro:

```bash
rm index.html
```

Eliminar cartafol:

```bash
rm -r proxecto
```

---

## 2.2. Sistema operativo Windows

Moi utilizado en contornos corporativos e servidores con IIS.

### Características

- Interface gráfica intuitiva.
- Sistema NTFS para a xestión de permisos.
- Integración con Active Directory.

### Comandos básicos

Crear cartafol:

```cmd
mkdir proxecto
```

Eliminar cartafol:

```cmd
rmdir proxecto
```

Crear ficheiro:

```cmd
echo.> index.html
```

---

## 2.3. Outros sistemas operativos

Aínda que menos frecuentes, tamén existen:

- macOS.
- FreeBSD.
- Unix.
- Sistemas baseados en contedores como Docker.

Na práctica profesional, Linux domina a maior parte dos servidores web.

---

# 3. Permisos de acceso

Os permisos determinan quen pode acceder aos recursos do servidor.

## 3.1. Tipos de acceso

En Linux existen tres permisos básicos:

| Permiso | Significado |
|----------|-------------|
| r | Lectura (read) |
| w | Escritura (write) |
| x | Execución (execute) |

Estes permisos poden asignarse a:

- Propietario.
- Grupo.
- Outros usuarios.

### Usuarios e grupos en Linux

Cada ficheiro ou cartafol ten asociados tres niveis de acceso:

#### Propietario (Owner)

É o usuario que posúe o ficheiro ou cartafol. Normalmente é quen o creou e ten o maior nivel de control sobre el.

Exemplo:

```text
alumno
```

#### Grupo (Group)

É un conxunto de usuarios que comparten determinados permisos sobre os recursos.

Exemplo:

```text
webmasters
```

Todos os usuarios pertencentes a este grupo herdarán os permisos asignados ao grupo.

#### Outros (Others)

Son todos os usuarios do sistema que non son nin o propietario nin pertencen ao grupo asociado ao recurso.

### Exemplo

```text
-rwxr-xr--
```

Descomposición:

```text
Propietario  Grupo   Outros
rwx          r-x     r--
```

Interpretación:

- Propietario: lectura, escritura e execución.
- Grupo: lectura e execución.
- Outros: só lectura.

---

## 3.2. Elección do tipo de acceso

Debe aplicarse o principio de mínimo privilexio:

> Cada usuario debe ter unicamente os permisos imprescindibles para realizar o seu traballo.

### Boas prácticas

✅ Limitar permisos de escritura.

✅ Evitar permisos 777.

✅ Separar usuarios administradores e editores.

✅ Realizar copias de seguridade periódicas.

---

## 3.3. Implementación de accesos

Visualizar permisos:

```bash
ls -l
```

Modificar permisos:

```bash
chmod 755 carpeta
```

Cambiar propietario:

```bash
chown usuario:grupo carpeta
```

### Permisos habituais nun sitio web

| Recurso | Permiso |
|----------|----------|
| Cartafoles | 755 |
| HTML, CSS, JS | 644 |
| Configuración sensible | 600 |

---

# 3.4. Acceso ao servidor mediante SSH

SSH (Secure Shell) é un protocolo que permite conectarse de forma segura a un servidor remoto mediante unha terminal.

Actualmente é unha das ferramentas máis utilizadas para administrar servidores web, executar comandos, configurar aplicacións e despregar proxectos.

### Vantaxes de SSH

- Comunicación cifrada.
- Administración remota do servidor.
- Execución de comandos en tempo real.
- Transferencia segura de ficheiros mediante SFTP.
- Automatización de tarefas.

## Uso da terminal integrada de Plesk

Moitos servidores dispoñen dunha terminal integrada accesible desde o panel de control.

### Pasos

1. Acceder a Plesk.
2. Seleccionar o dominio correspondente.
3. Abrir a opción **Sitios web e dominios → Terminal**.
4. Executar comandos directamente no servidor.

Exemplo:

```bash
pwd
```

Mostra o directorio actual.

---

## Conexión SSH desde Windows

Windows 10 e Windows 11 incorporan un cliente SSH nativo.

### Paso 1. Abrir unha terminal

Pode utilizarse:

- Windows Terminal.
- PowerShell.
- Símbolo do sistema (CMD).

### Paso 2. Executar a conexión

```bash
ssh usuario@servidor.com
```

Exemplo:

```bash
ssh alumno@meudominio.com
```

### Paso 3. Validar a pegada do servidor

A primeira vez aparecerá unha mensaxe similar a:

```text
Are you sure you want to continue connecting (yes/no)?
```

Responder:

```text
yes
```

### Paso 4. Introducir o contrasinal

Tras autentificarse aparecerá o prompt do servidor.

### Paso 5. Executar comandos

```bash
pwd
ls -la
```

---

## Comandos básicos para administración web

Mostrar directorio actual:

```bash
pwd
```

Listar ficheiros:

```bash
ls
```

Listar ficheiros con permisos:

```bash
ls -la
```

Cambiar de directorio:

```bash
cd public_html
```

Crear cartafol:

```bash
mkdir css
```

Crear ficheiro:

```bash
touch index.html
```

Modificar permisos:

```bash
chmod 755 directorio
```

Cambiar propietario:

```bash
chown usuario:grupo directorio
```

---


---

# 3.5. Certificados SSL/TLS e HTTPS

Actualmente, practicamente todos os sitios web profesionais utilizan HTTPS para protexer a comunicación entre o navegador e o servidor.

## Que é HTTP?

HTTP (HyperText Transfer Protocol) é o protocolo empregado para transferir información entre un navegador e un servidor web.

A información viaxa en texto plano e pode ser interceptada por terceiros.

Exemplo:

```text
http://www.exemplo.com
```

---

## Que é HTTPS?

HTTPS (HyperText Transfer Protocol Secure) é a versión segura de HTTP.

Emprega cifrado mediante SSL/TLS para protexer os datos durante a transmisión.

Exemplo:

```text
https://www.exemplo.com
```

### Vantaxes de HTTPS

- Protección dos datos transmitidos.
- Verificación da identidade do servidor.
- Mellora da confianza dos usuarios.
- Mellor posicionamento nos buscadores.
- Obrigatorio para moitas funcionalidades web modernas.

---

## Que é un certificado SSL/TLS?

É un ficheiro dixital que permite identificar un sitio web e cifrar as comunicacións.

O certificado contén información como:

- Nome do dominio.
- Entidade emisora.
- Data de validez.
- Chave pública de cifrado.

Cando un navegador detecta un certificado válido mostra un cadeado na barra de enderezos.

---

## Let's Encrypt

Let's Encrypt é unha autoridade certificadora gratuíta amplamente utilizada.

Permite emitir certificados SSL/TLS sen custo e renovalos automaticamente.

Actualmente é a opción máis habitual en servidores web e paneis de control como Plesk.

---

## Activación de HTTPS en Plesk

### Pasos xerais

1. Acceder ao dominio en Plesk.
2. Abrir a opción **SSL/TLS Certificates**.
3. Seleccionar **Let's Encrypt**.
4. Solicitar o certificado para o dominio.
5. Activar a protección SSL/TLS.
6. Comprobar que a web responde mediante HTTPS.

---

## Redirección de HTTP a HTTPS

Unha vez instalado o certificado é recomendable redirixir automaticamente todas as visitas cara á versión segura.

Exemplo:

```text
http://meudominio.com
```

rediríxese automaticamente a:

```text
https://meudominio.com
```

Esta configuración adoita activarse directamente desde Plesk.

---

## Como comprobar un certificado

Os navegadores permiten verificar a información do certificado.

### Chrome, Edge e Firefox

1. Pulsar sobre o cadeado da barra de enderezos.
2. Consultar os datos de seguridade.
3. Verificar o dominio e a data de validez.

---

## Boas prácticas

✅ Utilizar sempre HTTPS.

✅ Renovar os certificados antes da súa caducidade.

✅ Redirixir automaticamente HTTP a HTTPS.

✅ Evitar contido mixto (recursos HTTP dentro dunha páxina HTTPS).

✅ Empregar certificados válidos emitidos por autoridades recoñecidas.

---

# 4. Ordes de creación, modificación e borrado

A xestión correcta da estrutura do sitio web é fundamental para o mantemento e a seguridade.

## 4.1. Creación de elementos

Crear estrutura completa:

```bash
mkdir css js images
```

Resultado:

```text
sitio-web
├── css
├── js
└── images
```

---

## 4.2. Modificación de elementos

Renomear:

```bash
mv images recursos
```

Mover ficheiros:

```bash
mv index.html public/
```

Copiar ficheiros:

```bash
cp index.html copia-index.html
```

---

## 4.3. Eliminación de elementos

Eliminar ficheiro:

```bash
rm ficheiro.txt
```

Eliminar cartafol e contido:

```bash
rm -r directorio
```

⚠️ Estas operacións poden ser irreversibles.

---

# 5. Estrutura recomendada para un sitio web

```text
web/
├── index.html
├── css/
├── js/
├── images/
├── fonts/
├── docs/
└── backups/
```

### Vantaxes

- Mellor organización.
- Mantemento máis sinxelo.
- Maior seguridade.
- Escalabilidade.

---

# 6. Tendencias actuais

Na publicación web moderna é habitual:

- Utilizar Git para controlar versións.
- Automatizar despregamentos mediante GitHub, GitLab ou Bitbucket.
- Empregar conexións seguras mediante SSH e SFTP.
- Utilizar certificados SSL/TLS para habilitar HTTPS.
- Utilizar contedores Docker en contornas de desenvolvemento e produción.
- Automatizar copias de seguridade.
- Aplicar integración continua e despregamento continuo (CI/CD).
- Xestionar proxectos mediante paneis de control como Plesk.

---


---

# Exercicio práctico 5

## Activación e comprobación dun certificado SSL

Empregando un dominio configurado en Plesk:

### Tarefas

1. Comprobar se o dominio dispón de certificado SSL/TLS.
2. Identificar a entidade emisora do certificado.
3. Verificar a data de caducidade.
4. Comprobar se a web responde mediante HTTPS.
5. Verificar que existe redirección automática desde HTTP.

### Entregable

Documento con:

- URL analizada.
- Capturas do certificado.
- Captura da conexión HTTPS.
- Conclusión sobre o nivel de seguridade da web.

---

# Resumo

Neste tema aprendemos:

- Os fundamentos da seguridade na publicación web.
- Os sistemas de ficheiros máis utilizados.
- A xestión de permisos de acceso.
- Os comandos básicos de administración de ficheiros.
- As boas prácticas para organizar un sitio web.

---

# Exercicio práctico 1

## Creación da estrutura dun sitio web

Crea a seguinte estrutura mediante comandos do sistema operativo:

```text
empresa-web/
├── index.html
├── css/
├── js/
├── images/
└── docs/
```

### Tarefas

1. Crear os cartafoles.
2. Crear o ficheiro index.html.
3. Asignar permisos adecuados.
4. Documentar os comandos utilizados.

---

# Exercicio práctico 2

## Auditoría de permisos

Analiza a seguinte configuración:

```text
-rwxrwxrwx config.php
```

### Responde

1. Que problema presenta?
2. Que riscos de seguridade existen?
3. Que permisos serían máis adecuados?
4. Xustifica a túa resposta.

---

# Exercicio práctico 3

## Organización dun proxecto web real

Partindo dun proxecto realizado en módulos anteriores:

1. Reorganiza os recursos en cartafoles especializados.
2. Elimina ficheiros innecesarios.
3. Documenta a estrutura final.
4. Xera unha captura da árbore de directorios.
5. Explica as melloras realizadas.

---

# Exercicio práctico 4

## Primeira conexión SSH ao servidor

Conéctate ao servidor mediante SSH utilizando as credenciais facilitadas polo docente.

### Tarefas

1. Abrir unha terminal local.
2. Conectarse ao servidor mediante SSH.
3. Executar os comandos `pwd` e `ls -la`.
4. Crear un cartafol chamado `proba-ssh`.
5. Crear un ficheiro chamado `readme.txt`.
6. Consultar os permisos dos elementos creados.
7. Eliminar os elementos creados.
8. Documentar todos os comandos utilizados.

### Entregable

Documento PDF con:

- Capturas da conexión.
- Comandos executados.
- Explicación das operacións realizadas.