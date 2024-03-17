-- Crear tabla de usuarios
CREATE TABLE usuarios (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    email VARCHAR(100) UNIQUE,
    rol_id INT REFERENCES roles(id)
);

-- Crear tabla de roles
CREATE TABLE roles (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100) UNIQUE
);

-- Crear tabla de materias
CREATE TABLE materias (
    id SERIAL PRIMARY KEY,
    nombre VARCHAR(100),
    descripcion TEXT
);

-- Crear tabla de horarios
CREATE TABLE horarios (
    id SERIAL PRIMARY KEY,
    materia_id INT REFERENCES materias(id),
    dia_semana VARCHAR(20),
    hora_inicio TIME,
    hora_fin TIME
);