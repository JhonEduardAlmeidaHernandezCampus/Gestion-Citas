# Sistema Gestión de Citas

Este repositorio contiene un sistema de gestión de citas médicas, El sistema permite la programación, visualización y gestión de citas para médicos y pacientes. 



## Requisitos previos

- Node.js instalado en su máquina.

  

## Instalación

1. Para descargar Node.js ve a la siguiente página "[Download | Node.js (nodejs.org)](https://nodejs.org/en/download)".
2. Descarga la versión de Node.js correspondiente a su sistema operativo.
3. Clona este repositorio en tu máquina local.
4. Abre una terminal en el editor de código de tu preferencia, se recomienda "Visual Studio Code".
5. Ejecuta el siguiente comando para instalar las dependencias:

 `npm install;`

1. Una vez instaladas las dependencias, tienes que ejecutar el nodemon de la siguiente manera y también ejecutar el tsc.

   `npm run dev;`

   `npm run tsc;`

   

## Configuración

1. Asegurarse de tener creada la base de datos, si no cuentas con una base de datos, este proyecto ya trae una por defecto en la ruta `db/db.sql`
2. Crea un archivo `.env` en el directorio raíz de la aplicación.
3. Dentro del archivo `.env` , define las siguientes variables de entorno:

```
MY_CONFIG={"hostname": "", "port": }
MY_CONNECT={"host": "", "user": "", "password": "", "database": "", "port": "3306"}
```



## Uso

Puedes probar diferentes rutas accediendo a:

- `http://"hostname":"port"/usuario` rutas relacionadas con usuarios.
- `http://"hostname":"port"/tipo_documento` rutas relacionadas con tipo de documentos.
- `http://"hostname":"port"/medico` rutas relacionadas con medicos.
- `http://"hostname":"port"/genero` rutas relacionadas con generos.
- `http://"hostname":"port"/estado_cita` rutas relacionadas con estado de las citas.
- `http://"hostname":"port"/especialidad` rutas relacionadas con especialidades.
- `http://"hostname":"port"/consultorio` rutas relacionadas con consultorios.
- `http://"hostname":"port"/cita` rutas relacionadas con citas.
- `http://"hostname":"port"/acudiente` rutas relacionadas con acudientes.



## Validaciones

El sistema cuenta con validaciones al momento de ingresar datos en la base de datos hechas en TypeScrip, el sistema valida cada campo y su tipo de dato, si el dato no es correcto le muestra un error.



# EndPoint de Usuarios

Se le agrega el campo de usu_edad ya que originalmente la tabla no lo traía.



#### GET: `http://"hostname":"port"/usuario`

Este EndPoint devuelve una lista de usuarios existentes.

```
[
  {
    "usu_id": 12345,
    "usu_nombre": "Sofia",
    "usu_segdo_nombre": "Andrea",
    "usu_primer_apellido_usuar": "Johnson",
    "usu_segdo_apellido_usuar": "Sanchez",
    "usu_edad": 0,
    "usu_telefono": "+57 123213",
    "usu_direccion": "Calle 45",
    "usu_email": "Sofia@gmail.com",
    "usu_tipodoc": 1,
    "usu_genero": 1,
    "usu_acudiente": 12345
  },
  {
    "usu_id": 123123,
    "usu_nombre": "Sofia",
    "usu_segdo_nombre": "Andrea",
    "usu_primer_apellido_usuar": "Johnson Johnson Johnson",
    "usu_segdo_apellido_usuar": "Sanchez",
    "usu_edad": 18,
    "usu_telefono": "+57 123211231233",
    "usu_direccion": "Calle 45",
    "usu_email": "Sofia@gmail.com",
    "usu_tipodoc": 1,
    "usu_genero": 1,
    "usu_acudiente": 12345
  },
  ...
]
```



#### POST: `http://"hostname":"port"/usuario`

Este EndPoint permite agregar un nuevo usuario.

**Parámetros de entrada:**

- `Documento` : Documento de identidad del usuario.
- `Primer_Nombre` : Primer nombre del usuario.
- `Segundo_Nombre` : Segundo nombre del usuario.
- `Primer_Apellido`: Primer apellido del usuario.
- `Segundo_Apellido` : Segundo apellido del usuario.
- `Edad` : Edad del usuario.
- `Telefono` : Telefono del usuario.
- `Direccion` : Dirección del usuario.
- `Tipo_Documento` : Tipo de documento del usuario.
- `Genero` : Genero del usuario.
- `Acudiente` : Documento del acudiente del usuario.

**Ejemplo:**

```
{
   "Documento": 123123,
   "Primer_Nombre": "Sofia",
   "Segundo_Nombre": "Andrea",
   "Primer_Apellido": "Johnson",
   "Segundo_Apellido": "Sanchez",
   "Edad": 18,
   "Telefono": "+57 123213",
   "Direccion": "Calle 45",
   "Email": "Sofia@gmail.com",
   "Tipo_Documento": 1,
   "Genero": 1,
   "Acudiente": 12345
}
```



#### PUT: `http://"hostname":"port"/usuario/:id`

Este EndPoint permite actualizar los campos de la tabla de usuarios.

```
{
   "Documento": 123123,
   "Primer_Nombre": "Sofia",
   "Segundo_Nombre": "Andrea",
   "Primer_Apellido": "Johnson",
   "Segundo_Apellido": "Sanchez",
   "Edad": 18,
   "Telefono": "+57 123213",
   "Direccion": "Calle 45",
   "Email": "Sofia@gmail.com",
   "Tipo_Documento": 1,
   "Genero": 1,
   "Acudiente": 12345
}
```



# EndPoint de Tipo Documentos

#### GET: `http://"hostname":"port"/tipo_documento`

Este EndPoint devuelve una lista de tipo de documentos existentes.

```
[
  {
    "tipdoc_id": 1,
    "tipdoc_nombre": "Cedula",
    "tipdoc_abreviatura": "CC"
  },
  {
    "tipdoc_id": 2,
    "tipdoc_nombre": "Targeta",
    "tipdoc_abreviatura": "TI"
  },
  {
    "tipdoc_id": 3,
    "tipdoc_nombre": "Pasaporte",
    "tipdoc_abreviatura": "PT"
  },
  ...
]
```



#### POST: `http://"hostname":"port"/tipo_documento`

Este EndPoint permite agregar un nuevo tipo de documento.

**Parámetros de entrada:**

- `Tipo_Documento` : Tipo de documento que vaya a ingresar.

- `Abreviatura` : Abreviatura del tipo de documento.

  

**Ejemplo:**

```
{
   "Tipo_Documento": "Cedula de Extrangeria",
   "Abreviatura": "CE"
}
```



#### PUT: `http://"hostname":"port"/tipo_documento/:id`

Este EndPoint permite actualizar los campos de la tabla de tipo de documentos.

```
{
   "Tipo_Documento": "Cedula de Extrangeria",
   "Abreviatura": "CE"
}
```



# EndPoint de Medicos

#### GET: `http://"hostname":"port"/medico`

Este EndPoint devuelve una lista de médicos existentes.

```
[
  {
    "med_nroMatriculaProsional": 9876,
    "med_nombreCompleto": "Carlos Lopez",
    "med_consultorio": 3,
    "med_especialidad": 3
  },
  {
    "med_nroMatriculaProsional": 12312,
    "med_nombreCompleto": "Brayan Lizarazo",
    "med_consultorio": 1,
    "med_especialidad": 1
  },
  {
    "med_nroMatriculaProsional": 12345,
    "med_nombreCompleto": "Juan Garcia",
    "med_consultorio": 1,
    "med_especialidad": 1
  },
  ...
]
```



#### POST: `http://"hostname":"port"/medico`

Este EndPoint permite agregar un médico.

**Parámetros de entrada:**

- `Cedula` : Cedula del médico.

- `Nombre` : Nombre completo del médico.

- `Consultorio` : Consultorio en donde atiende el médico

- `Especialidad` : Especialidad del médico.

  

**Ejemplo:**

```
{
   "Cedula": 12312,
   "Nombre": "Nicolas",
   "Consultorio": 1,
   "Especialidad": 1
}
```



#### PUT: `http://"hostname":"port"/medico/:id`

Este EndPoint permite actualizar los campos de la tabla de medicos.

```
{
   "Cedula": 12312,
   "Nombre": "Nicolas",
   "Consultorio": 1,
   "Especialidad": 1
}
```





# EndPoint de Generos

#### GET: `http://"hostname":"port"/genero`

Este EndPoint devuelve una lista de géneros existentes.

```
[
  {
    "gen_id": 1,
    "gen_nombre": "Hombre",
    "gen_abreviatura": "H"
  },
  {
    "gen_id": 2,
    "gen_nombre": "Mujer",
    "gen_abreviatura": "M"
  },
  {
    "gen_id": 3,
    "gen_nombre": "Transgénero",
    "gen_abreviatura": "T"
  },
  {
    "gen_id": 4,
    "gen_nombre": "Intersexual",
    "gen_abreviatura": "I"
  },
  ...
]
```



#### POST: `http://"hostname":"port"/genero`

Este EndPoint permite agregar un nuevo género.

**Parámetros de entrada:**

- `Genero` : Genero el cual se piensa agregar a la base de datos.

- `Abreviatura` : Abreviatura del genero.

  

**Ejemplo:**

```
{
   "Genero": "Pangénero",
   "Abreviatura": "P"
}
```



#### PUT: `http://"hostname":"port"/genero/:id`

Este EndPoint permite actualizar los campos de la tabla de géneros.

```
{
   "Genero": "Pangénero",
   "Abreviatura": "P"
}
```





# EndPoint de Estado Citas

#### GET: `http://"hostname":"port"/estado_cita`

Este EndPoint devuelve una lista de estados de las citas existentes.

```
[
  {
    "estcita_id": 1,
    "estcita_nombre": "Activo"
  },
  {
    "estcita_id": 2,
    "estcita_nombre": "Aprobado"
  },
  {
    "estcita_id": 3,
    "estcita_nombre": "Rechazado"
  },
  {
    "estcita_id": 4,
    "estcita_nombre": "En Espera"
  },
  {
    "estcita_id": 5,
    "estcita_nombre": "Completado"
  },
  ...
]
```



#### POST: `http://"hostname":"port"/estado_cita`

Este EndPoint permite agregar un nuevo estado.

**Parámetros de entrada:**

- `Estado` : Estado de la cita que quiere incluir en la base de datos.

  

**Ejemplo:**

```
{
   "Estado": "Programada"
}
```



#### PUT: `http://"hostname":"port"/estado_cita/:id`

Este EndPoint permite actualizar los campos de la tabla de estado citas.

```
{
   "Estado": "Programada"
}
```





# EndPoint de Especialidades

#### GET: `http://"hostname":"port"/especialidad`

Este EndPoint devuelve una lista de especialidades existentes.

```
[
  {
    "esp_id": 1,
    "esp_nombre": "Medico Cardiologo"
  },
  {
    "esp_id": 2,
    "esp_nombre": "Medico Dermatologo"
  },
  {
    "esp_id": 3,
    "esp_nombre": "Medico Veterinario"
  },
  {
    "esp_id": 4,
    "esp_nombre": "Medico Neurologo"
  },
  {
    "esp_id": 5,
    "esp_nombre": "Medico Ortopedista"
  },
  ...
]
```



#### POST: `http://"hostname":"port"/especialidad`

Este EndPoint permite agregar una nueva especialidad.

**Parámetros de entrada:**

- `Especialidad` : Especialidad de los médicos.

  

**Ejemplo:**

```
{
   "Especialidad": "Medico Veterinario"
}
```



#### PUT: `http://"hostname":"port"/especialidad/:id`

Este EndPoint permite actualizar los campos de la tabla de especialidad.

```
{
   "Especialidad": "Medico Veterinario"
}
```





# EndPoint de Consultorios

#### GET: `http://"hostname":"port"/consultorio`

Este EndPoint devuelve una lista de consultorios existentes.

```
[
  {
    "cons_codigo": 1,
    "cons_nombre": "Consultorio Cardiología"
  },
  {
    "cons_codigo": 2,
    "cons_nombre": "Consultorio Dermatología"
  },
  {
    "cons_codigo": 3,
    "cons_nombre": "Consultorio Ginecología"
  },
  {
    "cons_codigo": 4,
    "cons_nombre": "Consultorio Neurología"
  },
  {
    "cons_codigo": 5,
    "cons_nombre": "Consultorio Ortopedia"
  },
  ...
]
```



#### POST: `http://"hostname":"port"/consultorio`

Este EndPoint permite agregar un nuevo consultorio.

**Parámetros de entrada:**

- `Codigo` : Código del consultorio.

- `Nombre` : Nombre del consultorio.

  

**Ejemplo:**

```
{
   "Codigo": 6,
   "Nombre": "Consultorio"
}
```



#### PUT: `http://"hostname":"port"/consultorio/:id`

Este EndPoint permite actualizar los campos de la tabla de consultorio.

```
{
   "Codigo": 6,
   "Nombre": "Consultorio Cardiologia"
}
```





# EndPoint de Citas

#### GET: `http://"hostname":"port"/cita`

Este EndPoint devuelve una lista de citas existentes.

```
[
  {
    "cit_codigo": 8,
    "cit_fecha": "2023-07-11T05:00:00.000Z",
    "cit_estadoCita": 1,
    "cit_medico": 13579,
    "cit_datosUsuario": 9876
  },
  {
    "cit_codigo": 9,
    "cit_fecha": "2023-07-04T05:00:00.000Z",
    "cit_estadoCita": 5,
    "cit_medico": 9876,
    "cit_datosUsuario": 9876
  },
  {
    "cit_codigo": 6,
    "cit_fecha": "2023-02-18T05:00:00.000Z",
    "cit_estadoCita": 5,
    "cit_medico": 13579,
    "cit_datosUsuario": 13579
  },
  ...
]
```



#### POST: `http://"hostname":"port"/cita`

Este EndPoint permite agregar una nueva cita.

**Parámetros de entrada:**

- `Fecha` : Fecha en que se registra la cita.

- `Estado` : Estado de la cita.

- `Medico` : Identificación del medico.

- `ID_Usuario` : Identificación del usuario para registrar la cita.

  

**Ejemplo:**

```
{
   "Fecha": "2023-02-18",
   "Estado": 5,
   "Medico": 13579,
   "ID_Usuario": 13579
}
```



#### PUT: `http://"hostname":"port"/cita/:id`

Este EndPoint permite actualizar los campos de la tabla de cita.

```
{
   "Fecha": "2023-02-18",
   "Estado": 5,
   "Medico": 13579,
   "ID_Usuario": 13579
}
```





# EndPoint de Acudientes

#### GET: `http://"hostname":"port"/acudiente`

Este EndPoint devuelve una lista de acudientes existentes.

```
[
  {
    "acu_codigo": 112,
    "acu_nombreCompleto": "Carmen Hernandez",
    "acu_telefono": "+57 1",
    "acu_direccion": "789 Clle 9"
  },
  {
    "acu_codigo": 1120,
    "acu_nombreCompleto": "Carmen Hernandez",
    "acu_telefono": "+57 12321312",
    "acu_direccion": "789"
  },
  {
    "acu_codigo": 9876,
    "acu_nombreCompleto": "Zaira Moran",
    "acu_telefono": "+57 51321312",
    "acu_direccion": "789 Rua das Flores"
  },
  ...
]
```



#### POST: `http://"hostname":"port"/acudiente`

Este EndPoint permite agregar un nuevo acudiente.

**Parámetros de entrada:**

- `Cedula` : Numero de identificación del acudiente.

- `Nombre` : Nombre del acudiente.

- `Telefono` : Teléfono del acudiente.

- `Direccion` : Dirección de residencia del acudiente.

  

**Ejemplo:**

```
{
   "Cedula": 112,
   "Nombre": "Carmen Hernandez",
   "Telefono": "+57 12321312",
   "Direccion": "789 Calle 9"
}
```



#### PUT: `http://"hostname":"port"/acudiente/:id`

Este EndPoint permite actualizar los campos de la tabla de acudiente.

```
{
   "Cedula": 112,
   "Nombre": "Carmen Hernandez",
   "Telefono": "+57 12321312",
   "Direccion": "789 Calle 9"
}
```





# CONSULTAS 

En esta parte se desarrollan las consultas a petición del teacher, las consultas son las siguientes.



#### CONSULTA 1 

```
Consulta 1 Ordenar los datos de usuarios por el campo nombre y de forma descendente.
```

EndPoint:   `http://"hostname":"port"/consultarUsuario/` 

```
[
    {
        "usu_id": 12345,
        "usu_nombre": "Sofia",
        "usu_segdo_nombre": "Andrea",
        "usu_primer_apellido_usuar": "Johnson",
        "usu_segdo_apellido_usuar": "Sanchez",
        "usu_edad": 0,
        "usu_telefono": "+57 123213",
        "usu_direccion": "Calle 45",
        "usu_email": "Sofia@gmail.com",
        "usu_tipodoc": 1,
        "usu_genero": 1,
        "usu_acudiente": 12345
    }
]
```





#### CONSULTA 2

```
Consulta 2 Ordenar todas las citas de forma descendiente por el campo de la fecha.
```

EndPoint: `http://"hostname":"port"/consultarCitas/` 

```
[
    {
        "cit_codigo": 8,
        "cit_fecha": "2023-07-11T05:00:00.000Z",
        "cit_estadoCita": 1,
        "cit_medico": 13579,
        "cit_datosUsuario": 9876
  	}
]
```





#### CONSULTA 3

```
Consulta 3, Obtener los medicos de una especialidad especifica.
```

EndPoint: `http://"hostname":"port"/consultarMedicos/especialidad/1` 

```
[
    {
        "med_nroMatriculaProsional": 12312,
        "med_nombreCompleto": "B",
        "med_especialidad": 1,
        "esp_nombre": "Medico Cardiologo"
    },
    {
        "med_nroMatriculaProsional": 12345,
        "med_nombreCompleto": "Juan Garcia",
        "med_especialidad": 1,
        "esp_nombre": "Medico Cardiologo"
    }
]
```





#### CONSULTA 4

```
Consulta 4, Encontrar la proxima cita, estan organizadas de forma desc por el campo de la fecha.
```

EndPoint: `http://"hostname":"port"/consultarCitas/proximaCita/13579` 

```
[
    {
        "usu_id": 13579,
        "usu_nombre": "Mia",
        "usu_primer_apellido_usuar": "Smith",
        "usu_telefono": "+57 214315125",
        "cit_fecha": "2023-02-18T05:00:00.000Z"
    },
    {
        "usu_id": 13579,
        "usu_nombre": "Mia",
        "usu_primer_apellido_usuar": "Smith",
        "usu_telefono": "+57 214315125",
        "cit_fecha": "2023-02-17T05:00:00.000Z"
    }
]
```





#### CONSULTA 5

```
Consulta 5, Encontrar pacientes con un medico especifico.
```

EndPoint: `http://"hostname":"port"/consultarUsuario/medicoEspecifico/13579` 



```
[
    {
        "usu_id": 13579,
        "usu_nombre": "Mia",
        "usu_primer_apellido_usuar": "Smith",
        "cit_fecha": "2022-02-18T05:00:00.000Z",
        "med_nroMatriculaProsional": 13579,
        "med_nombreCompleto": "Laura Sanchez"
    },
    {
        "usu_id": 13579,
        "usu_nombre": "Mia",
        "usu_primer_apellido_usuar": "Smith",
        "cit_fecha": "2023-02-17T05:00:00.000Z",
        "med_nroMatriculaProsional": 13579,
        "med_nombreCompleto": "Laura Sanchez"
    }
]
```





#### CONSULTA 6

```
Consulta 6, Obtener las consultorias para un paciente.
```

EndPoint: `http://"hostname":"port"/consultarConsultorias/consultorias/13579` 

```
[
    {
        "usu_id": 13579,
        "usu_nombre": "Mia",
        "usu_primer_apellido_usuar": "Smith",
        "usu_telefono": "+57 214315125",
        "cons_nombre": "Consultorio Ortopedia"
    },
    {
        "usu_id": 13579,
        "usu_nombre": "Mia",
        "usu_primer_apellido_usuar": "Smith",
        "usu_telefono": "+57 214315125",
        "cons_nombre": "Consultorio Ortopedia"
    }
]
```





#### CONSULTA 7

```
Consulta 7, Citas para un dia especifico.
```

EndPoint: `http://"hostname":"port"/consultarCitas/citaDia/2023-02-18` 

```
[
     {
        "cit_codigo": 6,
        "cit_fecha": "2023-02-18T05:00:00.000Z",
        "cit_estadoCita": 5,
        "cit_medico": 13579,
        "cit_datosUsuario": 13579
     },
     {
        "cit_codigo": 7,
        "cit_fecha": "2023-02-18T05:00:00.000Z",
        "cit_estadoCita": 5,
        "cit_medico": 13579,
        "cit_datosUsuario": 13579
     }
]
```





#### CONSULTA 8

```
Consulta 8, Obtener medicos y consultorios.
```

EndPoint: `http://"hostname":"port"/consultarMedicos/consultoriosMedicos` 

```
[
    {
        "med_nroMatriculaProsional": 9876,
        "med_nombreCompleto": "Carlos Lopez",
        "cons_nombre": "Consultorio Ginecología"
    },
    {
        "med_nroMatriculaProsional": 12312,
        "med_nombreCompleto": "B",
        "cons_nombre": "Consultorio Cardiología"
    }
]
```





#### CONSULTA 9

```
Consulta 9, Contar el número de citas que un médico tiene en un día específico.
```

EndPoint: `http://"hostname":"port"/consultarMedicos/Medico/13579/Fecha/2023-02-18` 

```
[
    {
        "cit_fecha": "2023-02-18T05:00:00.000Z",
        "Cantidad_Citas": 2,
        "med_nroMatriculaProsional": 13579,
        "med_nombreCompleto": "Laura Sanchez"
    }
]
```





#### CONSULTA 10

```
Consulta 10, Obtener los consultorio donde se aplicó las citas de un paciente.
```

EndPoint: `http://"hostname":"port"/consultarConsultorias/consultorios/13579` 

```
[
    {
        "usu_id": 13579,
        "usu_nombre": "Mia",
        "usu_primer_apellido_usuar": "Smith",
        "cit_fecha": "2022-02-18T05:00:00.000Z",
        "med_nombreCompleto": "Laura Sanchez",
        "cons_nombre": "Consultorio Ortopedia"
    },
    {
        "usu_id": 13579,
        "usu_nombre": "Mia",
        "usu_primer_apellido_usuar": "Smith",
        "cit_fecha": "2023-02-17T05:00:00.000Z",
        "med_nombreCompleto": "Laura Sanchez",
        "cons_nombre": "Consultorio Ortopedia"
    }
]
```





#### CONSULTA 11

```
Consulta 11, Obtener todas las citas realizadas por los pacientes de un genero si su estado de la cita fue atendidad.
```

EndPoint: `http://"hostname":"port"/consultarCitas/genero/5/estado/5` 

```
[
    {
        "usu_id": 13579,
        "usu_nombre": "Mia",
        "usu_primer_apellido_usuar": "Smith",
        "usu_genero": 5,
        "cit_fecha": "2022-02-18T05:00:00.000Z",
        "estcita_id": 5,
        "estcita_nombre": "Completado"
    },
    {
        "usu_id": 13579,
        "usu_nombre": "Mia",
        "usu_primer_apellido_usuar": "Smith",
        "usu_genero": 5,
        "cit_fecha": "2023-02-17T05:00:00.000Z",
        "estcita_id": 5,
        "estcita_nombre": "Completado"
    }
]
```





# NOTA

En tal caso de presentar algún error el código, comunicarse con el desarrollador.

EMAIL: Jhonhernandez.1899@gmail.com