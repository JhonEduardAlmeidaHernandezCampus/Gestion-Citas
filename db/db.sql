SHOW DATABASES;
CREATE DATABASE gestion_citas;
USE gestion_citas;

DROP DATABASE gestion_citas;


CREATE TABLE usuario(
    usu_id INT NOT NULL PRIMARY KEY,
    usu_nombre VARCHAR(50) NOT NULL,
    usu_segdo_nombre VARCHAR(45) NOT NULL,
    usu_primer_apellido_usuar VARCHAR(50) NOT NULL,
    usu_segdo_apellido_usuar VARCHAR(50),
    usu_telefono VARCHAR(50) NOT NULL,
    usu_direccion VARCHAR(100) NOT NULL,
    usu_email VARCHAR(100) NOT NULL,
    usu_tipodoc INT NOT NULL,
    usu_genero INT NOT NULL,
    usu_acudiente INT
);

CREATE TABLE tipo_documento(
    tipdoc_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    tipdoc_nombre VARCHAR(20) NOT NULL,
    tipdoc_abreviatura VARCHAR (20) NOT NULL
);

CREATE TABLE genero(
    gen_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    gen_nombre VARCHAR(20) NOT NULL,
    gen_abreviatura VARCHAR(20) NOT NULL
);

CREATE TABLE acudiente(MY_CONFIG={"hostname":"127.10.10.10", "port":5100}
MY_CONNECT={"host":"localhost","user":"campus","password":"campus2023","database":"db_mer_citas_medicas", "port":3306}
    acu_codigo INT NOT NULL PRIMARY KEY,
    acu_nombreCompleto VARCHAR(100) NOT NULL,
    acu_telefono VARCHAR(100) NOT NULL,
    acu_direccion VARCHAR(200) NOT NULL
);

CREATE TABLE cita(
    cit_codigo INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    cit_fecha DATE NOT NULL,
    cit_estadoCita INT NOT NULL,
    cit_medico INT NOT NULL,
    cit_datosUsuario INT NOT NULL
);

CREATE TABLE estado_cita(
    estcita_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    estcita_nombre VARCHAR(20) NOT NULL
);

CREATE TABLE medico(
    med_nroMatriculaProsional INT NOT NULL PRIMARY KEY,
    med_nombreCompleto VARCHAR(120) NOT NULL,
    med_consultorio INT NOT NULL,
    med_especialidad INT NOT NULL
);

CREATE TABLE especialidad(
    esp_id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
    esp_nombre VARCHAR(20) NOT NULL
);

CREATE TABLE consultorio(
    cons_codigo INT NOT NULL PRIMARY KEY,
    cons_nombre VARCHAR(50) NOT NULL
);


ALTER TABLE usuario ADD CONSTRAINT fk_usu_tipoDoc FOREIGN KEY(usu_tipodoc) REFERENCES tipo_documento(tipdoc_id);
ALTER TABLE usuario ADD CONSTRAINT fk_usu_genero FOREIGN KEY(usu_genero) REFERENCES genero(gen_id);
ALTER TABLE usuario ADD CONSTRAINT fk_usu_acudiente FOREIGN KEY(usu_acudiente) REFERENCES acudiente(acu_codigo);
ALTER TABLE cita ADD CONSTRAINT fk_cita_usuario FOREIGN KEY(cit_datosUsuario) REFERENCES usuario(usu_id);
ALTER TABLE cita ADD CONSTRAINT fk_cita_estadoCit FOREIGN KEY(cit_estadoCita) REFERENCES estado_cita(estcita_id);
ALTER TABLE cita ADD CONSTRAINT fk_cita_medico FOREIGN KEY(cit_medico) REFERENCES medico(med_nroMatriculaProsional);
ALTER TABLE medico ADD CONSTRAINT fk_medico_especialidad FOREIGN KEY(med_especialidad) REFERENCES especialidad(esp_id);
ALTER TABLE medico ADD CONSTRAINT fk_medico_consultorio FOREIGN KEY(med_consultorio) REFERENCES consultorio(cons_codigo);


/* INSERT DATOS */

INSERT INTO tipo_documento (tipdoc_nombre, tipdoc_abreviatura) VALUES ("Cedula", "CC");
INSERT INTO genero (gen_nombre, gen_abreviatura) VALUES ("Mujer", "M");
INSERT INTO acudiente (acu_codigo, acu_nombreCompleto, acu_telefono, acu_direccion) VALUES (28224423, "Carmen Hernandez", "+57 300421389", "Calle 11B Torres Zafiro");
INSERT INTO usuario (usu_id, usu_nombre, usu_segdo_nombre, usu_primer_apellido_usuar, usu_segdo_apellido_usuar, usu_telefono, usu_direccion, usu_email, usu_tipodoc, usu_genero, usu_acudiente) VALUES (1231312, "Camila", "Alejandra", "Martinez", "Sanchez", "+57 123123214", "Calle 11B", "JhonHernandez.1899@gmail.com", 1, 2, 28224423);
INSERT INTO estado_cita (estcita_nombre) VALUES ("Rechazado");
INSERT INTO especialidad (esp_nombre) VALUES ("Medico Urologo");
INSERT INTO consultorio (cons_codigo, cons_nombre) VALUES (4, "Consultorio General");
INSERT INTO medico (med_nroMatriculaProsional, med_nombreCompleto, med_consultorio, med_especialidad) VALUES (1234567, "Jhon Hernandez", 4, 2);
INSERT INTO cita (cit_fecha, cit_estadoCita, cit_medico, cit_datosUsuario) VALUES ("2023-02-15", 3, 1234567, 1231312);



/* CONSULTAS */
SELECT * FROM usuario ORDER BY usu_nombre DESC;
SELECT * FROM cita ORDER BY cit_fecha DESC;
SELECT * FROM medico INNER JOIN especialidad ON medico.med_especialidad = especialidad.esp_id WHERE especialidad.esp_id = 1;
SELECT * FROM cita INNER JOIN estado_cita ON cita.cit_estadoCita = estado_cita.estcita_id INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id WHERE cita.cit_estadoCita = 1;
SELECT * FROM cita INNER JOIN estado_cita ON cita.cit_estadoCita = estado_cita.estcita_id INNER JOIN usuario ON cita.cit_datosUsuario = usuario.usu_id WHERE cita.cit_medico = 12345;
SELECT * FROM usuario INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo WHERE consultorio.cons_codigo = 4;
SELECT * FROM cita WHERE cit_fecha = "2023-02-15";
SELECT * FROM medico INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo;
SELECT medico.med_nroMatriculaProsional, medico.med_nombreCompleto, medico.med_consultorio, medico.med_especialidad, COUNT(cita.cit_codigo) AS Total FROM medico INNER JOIN cita ON medico.med_nroMatriculaProsional = cita.cit_medico GROUP BY medico.med_nroMatriculaProsional, medico.med_nombreCompleto, medico.med_consultorio, medico.med_especialidad ORDER BY Total DESC;
SELECT * FROM usuario INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional INNER JOIN consultorio ON medico.med_consultorio = consultorio.cons_codigo;
SELECT * FROM usuario INNER JOIN genero ON usuario.usu_genero = genero.gen_id INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario INNER JOIN estado_cita ON cita.cit_estadoCita = estado_cita.estcita_id WHERE usuario.usu_genero = 1 AND estado_cita.estcita_id = 1;



SELECT usuario.usu_nombre, usuario.usu_segdo_nombre, usuario.usu_primer_apellido_usuar, usuario.usu_segdo_apellido_usuar, cita.cit_fecha, medico.med_nombreCompleto FROM usuario INNER JOIN cita ON usuario.usu_id = cita.cit_datosUsuario INNER JOIN medico ON cita.cit_medico = medico.med_nroMatriculaProsional WHERE cita.cit_estadoCita = 3;