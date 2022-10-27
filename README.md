<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvxfj0MxCOQiRwy9YOQKh_xkRqRfCW9qcduOpmGDZyKkkV0xUD3N_rLrUB_FMJfwNJAAo&usqp=CAU" alt="" />

### Project Chat API with NodeJS(Express)

- Express
- PostgreSQL
- Sequelize ORM
- Autenticación con Tokens
- Bcrypt para hashear constraseña
- Uso de Json Web Token

------------
## Instructivo

1. Tablas y relaciones de BBDD del proyecto [diagrama]
    1. Funcionamiento
        1. Un usuario tiene muchas conversaciones
        2. Un usuario es participante de muchas conversaciones
        3. Un usuario envia muchos mensajes
        4. Una conversacion tiene muchos participantes
        5. Una conversacion tiene muchos mensajes
2. Rutas con sus respectivos verbos
    1. /api/v1/conversations
        1. Ruta protegida
        2. Muestra conversaciones del usuario loggeado
        3. Podras crear conversaciones nuevas
    2. /api/v1/conversations/:conversation_id
        1. Ruta protegida
        2. Muestra una conversacion en especifico
        3. La podras eliminar y modificar desde aqui
    3. /api/v1/conversations/:conversation_id/messages
        1. Ruta protegida
        2. Mostrara todos los mensajes que tiene la conversacion
        3. Permitira crear nuevos mensajes
    4. /api/v1/conversations/:conversation_id/messages/:message_id
        1. Ruta protegida
        2. Mostrara un mensaje en especifico
        3. Permitira eliminarlo, pero no modificarlo

##### Funcionalidades Extra:

1. /api/v1/conversations/:conversation_id/participants
	1. Esta ruta debe estar protegida
	2. Mostrara los participantes de la conversacion
	3. Permitira agregar nuevos participantes a la conversacion

2. /api/v1/conversations/:conversation_id/participants/:participant_id
	1. Esta ruta debe estar protegida
	2. Mostrara un participante en especifico de la conversacion
	3. Permitira eliminar participantes de la conversacion

# Developers:
------------

| integrants | GitHub  | LinkedIn |
| :------------ |:---------------:| -----:|
| Angeles D'Stefano | GitHub | <a href="#" target="_blank">AD</a> |
| Carlos Prado | GitHub | <a href="#" target="_blank">CP</a> |
| David Garcia | [2DavidGarcia4](https://github.com/2DavidGarcia4http:// "2DavidGarcia4") | <a href="#" target="_blank">DG</a> |
| Elvis Espinoza | [3lvis-dev](http://https://github.com/3lvis-dev "3lvis-dev") | <a href="https://www.linkedin.com/in/elvis-alexander-espinoza-" target="_blank">EE</a> |
| Omar Sosa | GitHub | <a href="#" target="_blank">OS</a> |
| José Gavilanes | GitHub | <a href="#" target="_blank">JG</a> |

------------

### End