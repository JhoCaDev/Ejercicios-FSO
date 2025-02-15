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
