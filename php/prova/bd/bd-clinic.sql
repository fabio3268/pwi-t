-- Configuração do Banco de Dados

CREATE DATABASE db_consultation;
USE db_consultation;

-- Criação da tabela de pacientes
CREATE TABLE patients (
                          id INT AUTO_INCREMENT PRIMARY KEY,
                          name VARCHAR(255) NOT NULL,
                          age INTEGER NOT NULL,
                          medical_record VARCHAR(50) NOT NULL,
                          created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Criação da tabela de especialidades
CREATE TABLE specialities (
                             id INT AUTO_INCREMENT PRIMARY KEY,
                             name VARCHAR(100) NOT NULL UNIQUE
);

-- Inserir 10 especialidades médicas
INSERT INTO specialities (name) VALUES
                                   ('Cardiologia'),
                                   ('Pediatria'),
                                   ('Ortopedia'),
                                   ('Ginecologia'),
                                   ('Neurologia'),
                                   ('Oncologia'),
                                   ('Dermatologia'),
                                   ('Psiquiatria'),
                                   ('Endocrinologia'),
                                   ('Urologia'),
                                   ('Oftalmologia'),
                                   ('Otorrinolaringologia'),
                                   ('Nutrologia'),
                                   ('Cirurgia Geral');

-- Criação da tabela de médicos
CREATE TABLE doctors (
                         id INT AUTO_INCREMENT PRIMARY KEY,
                         name VARCHAR(255) NOT NULL,
                         crm VARCHAR(50) NOT NULL,
                         specialty_id INT,
                         FOREIGN KEY (specialty_id) REFERENCES specialities(id)
);

-- Inserir 25 médicos com nomes reais e especialidades
INSERT INTO doctors (name, crm, specialty_id) VALUES
                                                  ('Carlos Alberto Silva', 'CRM-SP 12345', 1),
                                                  ('Maria Helena Santos', 'CRM-RJ 67890', 2),
                                                  ('João Pedro Oliveira', 'CRM-MG 54321', 3),
                                                  ('Ana Clara Rodrigues', 'CRM-RS 98765', 4),
                                                  ('Pedro Henrique Costa', 'CRM-PR 24680', 5),
                                                  ('Mariana Alves Pereira', 'CRM-BA 13579', 6),
                                                  ('Rafael Martins', 'CRM-SC 11223', 7),
                                                  ('Juliana Ferreira', 'CRM-ES 33445', 8),
                                                  ('Lucas Mendes', 'CRM-GO 55667', 9),
                                                  ('Fernanda Souza', 'CRM-PE 77889', 10),
                                                  ('Ricardo Almeida', 'CRM-CE 99001', 1),
                                                  ('Patrícia Lima', 'CRM-DF 22334', 2),
                                                  ('André Santos', 'CRM-MS 44556', 3),
                                                  ('Camila Oliveira', 'CRM-MT 66778', 4),
                                                  ('Gustavo Rocha', 'CRM-PA 88990', 5),
                                                  ('Letícia Barbosa', 'CRM-RN 11223', 6),
                                                  ('Bruno Cardoso', 'CRM-AL 33445', 7),
                                                  ('Amanda Costa', 'CRM-SE 55667', 8),
                                                  ('Daniel Reis', 'CRM-TO 77889', 9),
                                                  ('Gabriela Martins', 'CRM-AC 99001', 10),
                                                  ('Roberto Campos', 'CRM-RO 12321', 1),
                                                  ('Silvia Mendonça', 'CRM-AP 45645', 2),
                                                  ('Eduardo Pires', 'CRM-RR 78978', 3),
                                                  ('Isabela Cunha', 'CRM-AM 10101', 4),
                                                  ('Marcos Oliveira', 'CRM-MA 11121', 5);