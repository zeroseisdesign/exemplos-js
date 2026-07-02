# Anexo. Guía rápida de comandos SSH, SFTP e Bash

## Comandos básicos de Bash

| Comando         | Descrición                              |
|-----------------|-----------------------------------------|
| `pwd`           | Amosar o directorio actual              |
| `ls -la`        | Listar ficheiros e permisos             |
| `cd`            | Cambiar de directorio                   |
| `mkdir`         | Crear un cartafol                       |
| `touch`         | Crear un ficheiro baleiro               |
| `cp`            | Copiar ficheiros ou cartafoles          |
| `mv`            | Mover ou renomear ficheiros/cartafoles  |
| `rm`            | Eliminar ficheiros                      |
| `rm -r`         | Eliminar cartafoles e o seu contido     |
| `chmod`         | Modificar permisos                      |
| `chown`         | Cambiar propietario                     |
| `exit`          | Pechar a sesión ou terminal             |

---

## Conexións remotas

| Comando / Sintaxe                                   | Descrición                        |
|-----------------------------------------------------|-----------------------------------|
| `ssh usuario@host`                                  | Conectarse a un servidor remoto por SSH |
| `sftp usuario@host`                                 | Abrir sesión SFTP interactiva     |
| `scp ficheiro usuario@host:/ruta/destino/`          | Copiar ficheiro a un servidor remoto usando SSH |
| `scp usuario@host:/ruta/orixe/ficheiro .`           | Descargar ficheiro desde servidor remoto |

Exemplo de uso:
```bash
ssh ana@servidor.com
sftp ana@servidor.com
scp documento.txt ana@servidor.com:/home/ana/
```

---

## Edición de ficheiros con vi

| Acción                        | Comando     | Descrición                              |
|-------------------------------|-------------|-----------------------------------------|
| Entrar en modo edición        | `i`         | Permite escribir                       |
| Saír do modo edición          | `Esc`       | Volve ao modo comando                  |
| Borrar un carácter            | `x`         | Elimina o carácter baixo o cursor      |
| Borrar unha palabra           | `dw`        | Elimina palabra dende o cursor         |
| Borrar unha liña              | `dd`        | Elimina a liña actual                  |
| Desfacer último cambio        | `u`         | Desfai a última acción                 |
| Buscar texto                  | `/texto`    | Busca a palabra "texto"                |
| Ir ao seguinte resultado      | `n`         | Vai á seguinte coincidencia            |
| Ir á liña 25                  | `25G`       | Salta á liña 25                        |
| Ir ao principio do ficheiro   | `gg`        | Vai á primeira liña                    |
| Ir ao final do ficheiro       | `G`         | Vai á última liña                      |
| Gardar cambios                | `:w`        | Garda o ficheiro                       |
| Gardar e saír                 | `:wq`       | Garda e pecha vi                       |
| Saír sen gardar               | `:q!`       | Pecha vi sen gardar                    |

### Nota sobre o uso das frechas do teclado

Ao editar un ficheiro con **vi**, é habitual que os usuarios principiantes observen que, ao pulsar as frechas do teclado, aparecen caracteres como `A`, `B`, `C` ou `D` dentro do documento en lugar de desprazarse polo texto.

Isto ocorre porque **vi está en modo inserción** e interpreta as secuencias enviadas polas frechas como caracteres de texto, en lugar de interpretalas como ordes de movemento. É un comportamento frecuente en terminais moi sinxelas, conexións SSH restrinxidas ou cando se utiliza a versión clásica de `vi`.

Para evitar este problema:

1. Premer `Esc` para volver ao **modo comando**.
2. Desprazarse coas frechas (se o terminal as soporta) ou utilizar as teclas clásicas de `vi`:

| Tecla | Acción |
|-------|--------|
| `h` | Esquerda |
| `j` | Abaixo |
| `k` | Arriba |
| `l` | Dereita |

Unha vez situado no lugar desexado, premer `i` para volver ao modo inserción e continuar editando.

> **Consello:** En moitos servidores Linux modernos está instalado **vim**, que interpreta correctamente as frechas na maioría dos terminais. Non obstante, en contornas restrinxidas como algúns servidores de hospedaxe ou terminais integradas de paneis de control (como Plesk), pode empregarse a versión clásica de `vi`, polo que resulta recomendable coñecer tamén as teclas `h`, `j`, `k` e `l`.

---

## Copiar ficheiros mediante SCP

SCP permite copiar ficheiros e cartafoles entre equipos usando SSH.

**Subir un ficheiro ao servidor:**
```bash
scp index.html usuario@servidor:/ruta/destino/
```

**Subir varios ficheiros:**
```bash
scp index.html estilos.css script.js usuario@servidor:/ruta/destino/
```

**Subir un cartafol enteiro:**
```bash
scp -r proxecto/ usuario@servidor:/ruta/destino/
```

**Descargar un ficheiro do servidor:**
```bash
scp usuario@servidor:/ruta/orixe/index.html .
```

**Descargar un cartafol:**
```bash
scp -r usuario@servidor:/ruta/orixe/proxecto .
```

**Usar un porto SSH personalizado (por exemplo, 2222):**
```bash
scp -P 2222 index.html usuario@servidor:/ruta/destino/
```

> **Nota:** SCP utiliza SSH para transferir datos. O parámetro do porto é `-P` (maiúscula) en `scp`, mentres que en `ssh` é `-p` (minúscula).

---

## Traballo interactivo con SFTP

Para abrir unha sesión SFTP:
```bash
sftp usuario@servidor
```

Principais comandos dentro de SFTP:

| Comando         | Descrición                                        |
|-----------------|---------------------------------------------------|
| `pwd`           | Amosar o directorio remoto actual                 |
| `lpwd`          | Amosar o directorio local actual                  |
| `ls`            | Listar ficheiros remotos                          |
| `lls`           | Listar ficheiros locais                           |
| `cd <dir>`      | Cambiar de directorio remoto                      |
| `lcd <dir>`     | Cambiar de directorio local                       |
| `put <ficheiro>`| Subir un ficheiro ao servidor                     |
| `put -r <dir>`  | Subir un cartafol ao servidor                     |
| `get <ficheiro>`| Descargar un ficheiro do servidor                 |
| `get -r <dir>`  | Descargar un cartafol do servidor                 |
| `mkdir <dir>`   | Crear un cartafol remoto                          |
| `rm <ficheiro>` | Eliminar un ficheiro remoto                       |
| `exit`          | Saír de SFTP                                      |

---

## Resumo

- **SSH**: Úsase para acceder e xestionar servidores de forma remota mediante liña de comandos.
- **SCP**: Ideal para transferir ficheiros rapidamente cun só comando, útil para scripts e automatización.
- **SFTP**: Permite traballar de forma interactiva cos ficheiros remotos, similar a unha aplicación tipo FileZilla pero desde a terminal.

Escolla a ferramenta segundo a súa necesidade: SSH para administración, SCP para transferencias rápidas, SFTP para traballo interactivo con ficheiros.