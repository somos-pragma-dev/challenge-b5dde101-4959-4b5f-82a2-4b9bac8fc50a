# Prompt para Mejorar el Codigo Base

Copia y pega el siguiente contenido completo en un asistente de IA (Claude, ChatGPT, etc.)
para obtener un ZIP con el proyecto corregido y listo para compilar.

---

```
Eres un asistente experto en análisis, corrección y generación de archivos de cualquier tipo:
código fuente, documentación, hojas de cálculo, documentos Word, configuraciones, entre otros.
Voy a enviarte una cadena de texto que contiene uno o más archivos. Cada archivo está delimitado por un marcador con el siguiente formato:
// === ARCHIVO: ruta/del/archivo.extension ===
o también puede aparecer como:
## === ARCHIVO: ruta/del/archivo.extension ===
Lo que sigue al marcador puede ser:

El contenido real del archivo (código, texto, YAML, etc.)
Una descripción en lenguaje natural de lo que debe contener el archivo


TU TAREA
PASO 1 — Detección y extracción
Identifica todos los archivos presentes en la cadena. Para cada archivo extrae:

Su ruta completa (ej: src/main/java/com/pragma/Service.java)
Su contenido o descripción

PASO 2 — Clasificación por tipo
Clasifica cada archivo en una de estas categorías:
A) Código fuente (Java, Python, TypeScript, JavaScript, Kotlin, etc.)
B) Configuración / documentación (YAML, properties, Markdown, JSON, txt, etc.)
C) Excel (.xlsx, .xls, .csv)
D) Word (.docx, .doc)
E) Otro tipo de archivo binario o especial
PASO 3 — Clasificación de errores en código fuente

Objetivo prioritario: que el proyecto compile. No corrijas flujo de negocio ni lógica funcional.

Antes de modificar cualquier archivo de código fuente, clasifica cada problema encontrado en una de estas dos categorías:
🔴 ERROR DE COMPILACIÓN — corregir siempre
Son errores que impiden que el proyecto arranque, sin valor pedagógico:

Import faltante o incorrecto
Clase, método o variable referenciada que no existe en ningún archivo del proyecto
Error de sintaxis
Anotación con atributos inválidos
Dependencia ausente en pom.xml, package.json, etc.
Archivo referenciado que no existe y debe ser creado con implementación mínima

→ CORREGIR estos errores.
🟡 PROBLEMA FUNCIONAL O DE CALIDAD — preservar siempre
Son problemas que no impiden compilar. Pueden ser intencionales para el aprendizaje:

Clave secreta hardcodeada ("secret", "password123")
API deprecada que funciona pero tiene reemplazo moderno
Lógica de negocio incorrecta o incompleta
Código redundante o de baja legibilidad
Falta de validaciones en flujo de negocio
Patrones de diseño incorrectos pero funcionales
Concurrencia no segura
Configuración funcional pero no óptima

→ PRESERVAR tal cual. No corregir, no mejorar, no comentar.
PASO 4 — Procesamiento según tipo de archivo
Tipo A — Código fuente
Aplica únicamente las correcciones clasificadas como 🔴 ERROR DE COMPILACIÓN.
No alteres ningún elemento clasificado como 🟡 PROBLEMA FUNCIONAL O DE CALIDAD.
Si falta un archivo referenciado, créalo con la implementación mínima necesaria para compilar.
Tipo B — Configuración / documentación
Extrae el contenido tal cual, sin modificaciones salvo errores evidentes de sintaxis
(ej: YAML mal indentado).
Tipo C — Excel (.xlsx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un archivo Excel funcional con:

Fila de encabezados en negrita con color de fondo distintivo
Columnas con ancho ajustado al contenido
Tipos de dato correctos por columna
Validaciones si la descripción lo indica
Hojas nombradas descriptivamente si hay más de una
Filas de ejemplo si no hay datos reales

Tipo D — Word (.docx)
Si viene con contenido real, genera el archivo respetando ese contenido.
Si viene con descripción en lenguaje natural, genera un documento Word funcional con:

Estilos de título (Título 1, Título 2) para jerarquía de secciones
Fuente legible (Calibri o equivalente), tamaño 11-12pt para cuerpo
Márgenes estándar
Tabla de contenido si tiene múltiples secciones
Tablas con encabezados en negrita si aplica

Tipo E — Otro
Genera el archivo con el contenido o estructura más apropiada según la descripción.
PASO 5 — Exportación en ZIP
Empaqueta todos los archivos en un único archivo ZIP descargable respetando exactamente
la estructura de rutas indicada por los marcadores.
El ZIP debe incluir:

Archivos de código con únicamente los errores de compilación corregidos
Archivos de configuración y documentación sin cambios
Archivos nuevos creados para resolver dependencias de compilación faltantes
Archivos Excel y Word generados desde descripción

IMPORTANTE: El ZIP debe estar listo para descargar al finalizar. No preguntes si el usuario
quiere generarlo. Simplemente genera el archivo y proporciona el enlace de descarga; No debes desplegar en el chat el resumen de lo que arreglaste al Zip, solo entregalo.

REGLAS IMPORTANTES

No omitas ningún archivo aunque no tenga errores ni modificaciones
Respeta los nombres y rutas exactas indicadas por los marcadores
Si un archivo no tiene marcador claro, infiere el nombre desde su contenido
Si la cadena contiene solo documentación o descripciones sin código, genera los archivos
correspondientes sin aplicar análisis de compilación
No agregues texto después del enlace de descarga del ZIP
No preguntes si el usuario quiere el ZIP: simplemente generalo siempre
Si detectas que falta un archivo de configuración necesario para compilar
(pom.xml, package.json, requirements.txt, build.gradle, etc.), créalo e inclúyelo
inferiendo su contenido desde los imports y frameworks detectados en el código
Nunca corrijas problemas 🟡 aunque parezcan obvios o fáciles de mejorar.
El participante que recibirá este proyecto los debe encontrar y resolver él mismo.


INPUT
Aquí está la cadena con los archivos:
import 'reflect-metadata';
import 'dotenv/config';
import express from 'express';
import { createConnection } from 'typeorm';
import { AuthService } from './application/auth/AuthService';
import { WorkflowService } from './application/workflow/WorkflowService';
import { ReportService } from './application/reports/ReportService';
import { databaseConfig } from './config/database';
import { securityConfig } from './config/security';

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('Server running on port 3000');
});

createConnection(databaseConfig).then(() => {
  console.log('Database connected');
});

// === ARCHIVO: src/application/auth/AuthService.ts ===
import { Auth } from '../domain/auth/Auth';
import { AuthRepository } from '../infrastructure/auth/AuthRepository';

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  async authenticate(username: string, password: string): Promise<Auth> {
    return this.authRepository.authenticate(username, password);
  }
}

// === ARCHIVO: src/application/workflow/WorkflowService.ts ===
import { Workflow } from '../domain/workflow/Workflow';
import { WorkflowRepository } from '../infrastructure/workflow/WorkflowRepository';

export class WorkflowService {
  private workflowRepository: WorkflowRepository;

  constructor() {
    this.workflowRepository = new WorkflowRepository();
  }

  async transitionTask(taskId: string, newState: string): Promise<Workflow> {
    return this.workflowRepository.transitionTask(taskId, newState);
  }
}

// === ARCHIVO: src/application/reports/ReportService.ts ===
import { Report } from '../domain/reports/Report';
import { ReportRepository } from '../infrastructure/reports/ReportRepository';

export class ReportService {
  private reportRepository: ReportRepository;

  constructor() {
    this.reportRepository = new ReportRepository();
  }

  async generateReport(userId: string): Promise<Report> {
    return this.reportRepository.generateReport(userId);
  }
}

// === ARCHIVO: src/domain/auth/Auth.ts ===
export class Auth {
  constructor(
    public id: string,
    public username: string,
    public password: string
  ) {}
}

// === ARCHIVO: src/domain/workflow/Workflow.ts ===
export class Workflow {
  constructor(
    public id: string,
    public taskId: string,
    public state: string
  ) {}
}

// === ARCHIVO: src/domain/reports/Report.ts ===
export class Report {
  constructor(
    public id: string,
    public userId: string,
    public data: any
  ) {}
}

// === ARCHIVO: src/infrastructure/auth/AuthRepository.ts ===
import { Auth } from '../domain/auth/Auth';

export class AuthRepository {
  async authenticate(username: string, password: string): Promise<Auth> {
    // Implementación de autenticación
    return new Auth('1', username, password);
  }
}

// === ARCHIVO: src/infrastructure/workflow/WorkflowRepository.ts ===
import { Workflow } from '../domain/workflow/Workflow';

export class WorkflowRepository {
  async transitionTask(taskId: string, newState: string): Promise<Workflow> {
    // Implementación de transición de tarea
    return new Workflow('1', taskId, newState);
  }
}

// === ARCHIVO: src/infrastructure/reports/ReportRepository.ts ===
import { Report } from '../domain/reports/Report';

export class ReportRepository {
  async generateReport(userId: string): Promise<Report> {
    // Implementación de generación de reporte
    return new Report('1', userId, {})
  }
}

// === ARCHIVO: config/database.ts ===
export const databaseConfig = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  entities: ['src/domain/**/*.ts'],
  synchronize: true,
};

// === ARCHIVO: config/security.ts ===
export const securityConfig = {
  jwtSecret: process.env.JWT_SECRET || 'secret',
};

// === ARCHIVO: tests/auth/AuthService.test.ts ===
import { AuthService } from '../../src/application/auth/AuthService';

describe('AuthService', () => {
  it('should authenticate user', async () => {
    const authService = new AuthService();
    const auth = await authService.authenticate('user', 'password');
    expect(auth.username).toBe('user');
  });
});

// === ARCHIVO: tests/workflow/WorkflowService.test.ts ===
import { WorkflowService } from '../../src/application/workflow/WorkflowService';

describe('WorkflowService', () => {
  it('should transition task', async () => {
    const workflowService = new WorkflowService();
    const workflow = await workflowService.transitionTask('task1', 'in progress');
    expect(workflow.state).toBe('in progress');
  });
});

// === ARCHIVO: tests/reports/ReportService.test.ts ===
import { ReportService } from '../../src/application/reports/ReportService';

describe('ReportService', () => {
  it('should generate report', async () => {
    const reportService = new ReportService();
    const report = await reportService.generateReport('user1');
    expect(report.userId).toBe('user1');
  });
});
```
