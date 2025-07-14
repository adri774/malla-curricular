function toggle(element) {
  const ul = element.nextElementSibling;
  ul.style.display = ul.style.display === 'block' ? 'none' : 'block';
}

function mostrarDescripcion(clave) {
  const descripciones = {
    introduccion: 'Fundamentos de finanzas y su rol en la empresa.',
    logistica: 'Procesos de logística y distribución internacional.',
    pensamiento: 'Habilidades matemáticas para análisis económico.',
    textos: 'Comprensión lectora y redacción académica.',
    catedra: 'Identidad y desarrollo cultural en la Orinoquía.',
    contabilidad: 'Registro y análisis de operaciones contables.',
    economia: 'Principios de economía y mercado.',
    estadistica: 'Herramientas estadísticas básicas.',
    derecho: 'Principios jurídicos aplicables a la empresa.',
    textos2: 'Redacción avanzada y producción de textos científicos.',
    finanzas2: 'Finanzas en el entorno corporativo.',
    investigacion: 'Técnicas de investigación académica.',
    mercadeo: 'Estrategias de mercadeo internacional.',
    economia2: 'Política macroeconómica y su aplicación.',
    logistica2: 'Logística a nivel global.',
    finanzas3: 'Toma de decisiones financieras estratégicas.',
    comercio: 'Operaciones y regulaciones del comercio exterior.',
    administracion: 'Funciones y procesos empresariales.',
    analisis: 'Interpretación de estados y ratios financieros.',
    idioma: 'Inglés aplicado al mundo financiero.',
    derivado: 'Instrumentos financieros derivados.',
    inversion: 'Teoría de portafolios e inversión.',
    finanzas3b: 'Finanzas en un contexto global.',
    econometria: 'Modelos econométricos básicos.',
    negocios: 'Fundamentos de negocios internacionales.',
    finanzas4: 'Gestión financiera internacional avanzada.',
    gestion: 'Planeación y control financiero.',
    tributaria: 'Implicaciones fiscales en finanzas.',
    negocios2: 'Negocios internacionales avanzada.',
    electiva1: 'Asignatura electiva a elección.',
    seminario: 'Seminario de análisis financiero.',
    portafolio: 'Gestión de inversiones y carteras.',
    compliance: 'Normas y cumplimiento financiero.',
    electiva2: 'Electiva a elección.',
    idioma2: 'Inglés avanzado profesional.',
    etica: 'Ética y responsabilidad social empresarial.',
    negocios3: 'Estrategias en mercados globales.',
    electiva3: 'Electiva a elección.',
    finanzas5: 'Finanzas para pequeñas y medianas empresas.',
    gestion2: 'Gestión de riesgos financieros.',
    trabajo: 'Desarrollo del Trabajo de Grado.',
    practica: 'Práctica profesional supervisada.',
    electiva4: 'Electiva a elección.',
    seminario2: 'Seminario de investigación avanzada.',
    idioma3: 'Inglés para redacción financiera.'
  };

  const nombre = document.querySelector(`[onclick="mostrarDescripcion('${clave}')"]`).textContent;
  document.getElementById('tituloMateria').textContent = nombre;
  document.getElementById('descripcionMateria').textContent = descripciones[clave] || 'Descripción no disponible.';
  document.getElementById('modal').style.display = 'flex';
}

function cerrarModal() {
  document.getElementById('modal').style.display = 'none';
}
