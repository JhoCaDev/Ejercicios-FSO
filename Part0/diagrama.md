<!-- 0.4 -->

sequenceDiagram
participant Usuario
participant Navegador
participant Servidor
participant BaseDeDatos

    Usuario->>Navegador: Usuario escribe una nota y hace clic en Save
    Navegador->>Servidor: POST /nueva nota (envía la nota)
    activate Servidor
    Servidor->>BaseDeDatos: Guarda la nota en la base de datos
    activate BaseDeDatos
    BaseDeDatos-->>Servidor: Se envía la confirmación de almacenamiento (201 Created)
    deactivate BaseDeDatos
    Servidor-->>Navegador: Respuesta 201 Created
    deactivate Servidor
    Navegador->>Usuario: El usuario ve la nota ingresada en el navegador

<!-- 0.5 -->

sequenceDiagram
participant Usuario
participant Navegador
participant Servidor

    Usuario->>Navegador: El usuario ingresa a una pagina SPA
    Navegador->>Servidor: GET /spa (El navegador solicita el HTML de la SPA)
    activate Servidor
    Servidor-->>Navegador: Devuelve el HTML base de la SPA
    deactivate Servidor
    Navegador->>Servidor: GET /main.css (Hace una nueva solicitud para cargar los estilos)
    activate Servidor
    Servidor-->>Navegador: Devuelve el CSS
    deactivate Servidor
    Navegador->>Servidor: GET /spa.js (Hace una nueva solicitud donde solicita la lógica de la SPA)
    activate Servidor
    Servidor-->>Navegador: Devuelve el archivo JavaScript de la SPA
    deactivate Servidor
    Navegador->>Servidor: GET /data.json (Hace una nueva solicitud donde solicita las notas en formato JSON)
    activate Servidor
    Servidor-->>Navegador: Devuelve JSON con las notas
    deactivate Servidor
    Note right of Navegador: La SPA renderiza las notas sin recargar la página
    Navegador->>Usuario: El usuario ve las notas en el navegador

<!-- 0.6 -->

sequenceDiagram
participant Usuario
participant Navegador
participant Servidor
participant BaseDeDatos

    Usuario->>Navegador: Usuario escribe una nota y hace clic en Save
    Navegador->>Servidor: POST /nueva nota (envía la nota)
    activate Servidor
    Servidor->>BaseDeDatos: Guarda la nota en la base de datos
    activate BaseDeDatos
    BaseDeDatos-->>Servidor: Se envía la confirmación de almacenamiento (201 Created)
    deactivate BaseDeDatos
    Servidor-->>Navegador: Respuesta 201 Created
    deactivate Servidor
    Note right of Navegador: La nueva nota se agrega en la interfaz sin recargar la página
    Navegador->>Usuario: El usuario ve la nota ingresada en el navegador
