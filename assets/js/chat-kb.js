// Base de conocimiento del asistente. Redactada por Gemini 3.8 Flash a partir de un encargo con datos verificados
// y revisada por Claude. Formato: id, t (título), p (frases, sin tildes), k (palabras clave, sin tildes), a (respuesta HTML), next.
window.TA_KB = [
 {
  "id": "calidad-iso",
  "t": "Calidad y sistemas de gestión ISO",
  "p": ["ayudan con iso 9001", "sistema de gestion de calidad", "preparar una auditoria interna", "documentacion de procesos", "sistema de gestion integrado hseq"],
  "k": ["iso", "9001", "14001", "45001", "calidad", "auditoria", "hseq", "sgi", "procesos", "indicadores"],
  "a": "<p>Sí. Te ayudamos con la documentación, los indicadores y la preparación de auditorías internas de sistemas de gestión en <b>ISO 9001, 14001 y 45001</b>.</p><p>Lo lidera Daniela Rico, ingeniera industrial y auditora interna en sistemas de gestión integrados HSEQ certificada por SGS Academy.</p>",
  "next": ["daniela", "analitica-datos", "cotizar"]
 },
 {
  "id": "servicios",
  "t": "Servicios ofrecidos",
  "p": [
   "que servicios ofrecen",
   "en que me pueden ayudar",
   "que soluciones tienen",
   "cuales son sus servicios"
  ],
  "k": [
   "servicios",
   "soluciones",
   "portafolio",
   "desarrollo",
   "trabajos",
   "oferta"
  ],
  "a": "<p>Ofrecemos desarrollo de <b>páginas web a la medida</b>, el sistema de punto de venta e inventario <b>Núcleo</b> y acompañamiento técnico en <b>proyectos de grado</b>. También brindamos consultoría empresarial en ciberseguridad y análisis de datos. Cuéntanos qué necesitas y te asesoramos.</p>",
  "next": [
   "paginas-web",
   "nucleo",
   "tesis"
  ]
 },
 {
  "id": "paginas-web",
  "t": "Páginas web a la medida",
  "p": [
   "hacen paginas web",
   "necesito una pagina de internet",
   "crean sitios web para empresas",
   "diseno de paginas web"
  ],
  "k": [
   "web",
   "sitio",
   "pagina",
   "portal",
   "desarrollo",
   "corporativa",
   "responsive"
  ],
  "a": "<p>Creamos páginas web corporativas, de servicios o de proyectos con diseño propio sin plantillas, adaptadas a celulares y rápidas. Incluyen formularios conectados a WhatsApp o correo, buenas prácticas de seguridad y publicación en tu propio dominio. Además, pueden incorporar asistentes virtuales y contenido audiovisual profesional.</p>",
  "next": [
   "paginas-web-chatbot",
   "paginas-web-multimedia",
   "cotizar"
  ]
 },
 {
  "id": "nucleo",
  "t": "Sistema de ventas Núcleo",
  "p": [
   "que es nucleo",
   "tienen software para tienda",
   "necesito un punto de venta",
   "como funciona el sistema nucleo"
  ],
  "k": [
   "nucleo",
   "pos",
   "ventas",
   "inventario",
   "caja",
   "negocio",
   "facturacion",
   "software"
  ],
  "a": "<p><b>Núcleo</b> es un software de escritorio para Windows creado por Edwin, ideal para negocios mayoristas y detallistas. Funciona 100% sin internet, controla inventario por lotes FIFO, maneja ventas con código de barras, cartera de créditos e impresión de tiquetes térmicos. Ya digitalizó con éxito más de 550 productos que antes se gestionaban a mano.</p>",
  "next": [
   "nucleo-sin-internet",
   "nucleo-inventario-fifo",
   "cotizar"
  ]
 },
 {
  "id": "tesis",
  "t": "Acompañamiento en proyectos de grado",
  "p": [
   "ayudan con tesis",
   "hacen proyectos de grado",
   "asesoria para grado de ingenieria",
   "necesito ayuda con mi trabajo de grado"
  ],
  "k": [
   "tesis",
   "grado",
   "universidad",
   "estudiantes",
   "asesoria",
   "sustentacion",
   "software"
  ],
  "a": "<p>Brindamos acompañamiento técnico especializado para estudiantes: desarrollamos el software o aplicación de tu proyecto, realizamos el análisis de datos y preparamos videos y la sustentación. Recuerda que tú eres el autor del trabajo; nosotros asesoramos y construimos la parte técnica y no vendemos tesis escritas.</p>",
  "next": [
   "tesis-software",
   "tesis-sustentacion",
   "tesis-etica"
  ]
 },
 {
  "id": "equipo",
  "t": "Quiénes somos",
  "p": [
   "quienes son ustedes",
   "quienes conforman the architect",
   "con quien voy a trabajar",
   "quien esta detras de este proyecto"
  ],
  "k": [
   "equipo",
   "nosotros",
   "empresa",
   "fundadores",
   "socios",
   "integrantes"
  ],
  "a": "<p>Somos <b>The Architect · Soluciones tecnológicas</b>, un equipo de dos personas entre Santa Marta y Valledupar. Edwin Calderón, ingeniero de sistemas, está a cargo de la arquitectura y el desarrollo; Daniela Rico, ingeniera industrial y auditora interna HSEQ, de la producción audiovisual, las redes, la atención a clientes y el análisis de calidad y datos. Atendemos a clientes de toda Colombia.</p>",
  "next": [
   "edwin",
   "daniela",
   "ubicacion"
  ]
 },
 {
  "id": "edwin",
  "t": "Edwin Calderón (The Architect)",
  "p": [
   "quien es edwin calderon",
   "quien es the architect",
   "que experiencia tiene el desarrollador",
   "perfil del ingeniero"
  ],
  "k": [
   "edwin",
   "calderon",
   "architect",
   "ingeniero",
   "programador",
   "experiencia",
   "desarrollador"
  ],
  "a": "<p>Edwin Belisario Calderón Aguilera es Ingeniero de Sistemas y estudiante de Ingeniería Industrial de la Universidad del Magdalena, con más de 11 años de experiencia en tecnología desde 2015. Su lema es: «Diagnostico el problema como ingeniero industrial y construyo la solución como ingeniero de sistemas». Se encarga de arquitectura, desarrollo full-stack, bases de datos y seguridad, habiendo liderado equipos de hasta 50 personas.</p>",
  "next": [
   "equipo",
   "daniela",
   "proyectos"
  ]
 },
 {
  "id": "daniela",
  "t": "Daniela (Audiovisual y Redes)",
  "p": [
   "quien es daniela",
   "que hace daniela",
   "quien toma las fotos y videos",
   "con quien hablo al inicio"
  ],
  "k": [
   "daniela",
   "audiovisual",
   "fotos",
   "videos",
   "redes",
   "contacto",
   "atencion"
  ],
  "a": "<p><b>Daniela Rico</b> es tu primer contacto: maneja las redes sociales y hace las fotos y los videos de cada proyecto.</p><p>Es ingeniera industrial de la Universidad del Magdalena, auditora interna en sistemas de gestión integrados HSEQ certificada por SGS Academy y coautora de una investigación sobre calidad y Six Sigma publicada por Springer Nature. Aporta el análisis estadístico (Minitab, Power BI) y la mirada de calidad.</p>",
  "next": [
   "equipo",
   "paginas-web-multimedia",
   "contacto"
  ]
 },
 {
  "id": "contacto",
  "t": "Canales de contacto",
  "p": [
   "como los contacto",
   "cual es el numero de whatsapp",
   "tienen correo electronico",
   "donde puedo escribirles"
  ],
  "k": [
   "contacto",
   "whatsapp",
   "telefono",
   "celular",
   "correo",
   "email",
   "escribir",
   "charlar"
  ],
  "a": "<p>Puedes escribirnos directamente por WhatsApp al <b>+57 301 409 9377</b> o por correo electrónico a <b>edwinaguilera777@gmail.com</b>. ¡Estaremos atentos para atenderte!</p>",
  "next": [
   "cotizar",
   "ubicacion",
   "servicios"
  ]
 },
 {
  "id": "cotizar",
  "t": "Cotización gratis",
  "p": [
   "como pido una cotizacion",
   "como cotizo mi proyecto",
   "cobran por cotizar",
   "quiero una cotizacion"
  ],
  "k": [
   "cotizar",
   "cotizacion",
   "presupuesto",
   "precio",
   "estimado",
   "propuesta",
   "valor"
  ],
  "a": "<p>La cotización es completamente gratis y sin ningún compromiso. Escríbenos por WhatsApp contándonos sobre tu idea para evaluar los detalles y darte una propuesta personalizada.</p>",
  "next": [
   "contacto",
   "precios",
   "proceso"
  ]
 },
 {
  "id": "proceso",
  "t": "Metodología de trabajo",
  "p": [
   "como es el proceso de trabajo",
   "cuales son las etapas",
   "como trabajan ustedes",
   "como se desarrolla un proyecto"
  ],
  "k": [
   "proceso",
   "pasos",
   "etapas",
   "metodologia",
   "desarrollo",
   "fases",
   "forma"
  ],
  "a": "<p>Trabajamos en 4 etapas: 1) <b>Conversamos</b> para entender el problema y tu negocio; 2) <b>Diseñamos</b> la propuesta y el alcance; 3) <b>Construimos</b> mostrando avances que puedes ir viendo; y 4) <b>Entregamos y acompañamos</b> con publicación, capacitación y soporte.</p>",
  "next": [
   "cotizar",
   "soporte-postentrega",
   "servicios"
  ]
 },
 {
  "id": "proyectos",
  "t": "Proyectos y experiencia",
  "p": [
   "que proyectos han hecho",
   "tienen portafolio de clientes",
   "puedo ver sus trabajos anteriores",
   "que experiencia comprobada tienen"
  ],
  "k": [
   "proyectos",
   "portafolio",
   "experiencia",
   "casos",
   "trabajos",
   "clientes",
   "historial"
  ],
  "a": "<p>En nuestro portafolio destacan el sitio trilingüe de la refinería Petroil S.A., el sitio de tesis de maestría «Guardianes del Viento», el sistema de ventas Núcleo y una plataforma BPIN de salud mental con más de 5.000 usuarios atendidos. Edwin también fundó VR Zone, arcade pionero en Santa Marta.</p>",
  "next": [
   "proyecto-petroil",
   "proyecto-guardianes",
   "proyecto-salud-mental"
  ]
 },
 {
  "id": "ubicacion",
  "t": "Ubicación y cobertura",
  "p": [
   "donde estan ubicados",
   "de que ciudad son",
   "estan en santa marta",
   "donde queda su oficina"
  ],
  "k": [
   "ubicacion",
   "donde",
   "ciudad",
   "santa marta",
   "colombia",
   "oficina",
   "presencial",
   "remoto"
  ],
  "a": "<p>Estamos entre <b>Santa Marta y Valledupar</b>, Colombia. Atendemos de forma presencial o de manera remota a clientes de cualquier lugar del país.</p>",
  "next": [
   "cobertura-nacional",
   "contacto",
   "equipo"
  ]
 },
 {
  "id": "precios",
  "t": "Precios y tarifas",
  "p": [
   "cuanto cuesta una pagina",
   "que precio tiene el sistema nucleo",
   "cuales son sus tarifas",
   "cuanto vale el servicio"
  ],
  "k": [
   "precio",
   "costo",
   "tarifas",
   "cobro",
   "presupuesto",
   "plata",
   "cuanto"
  ],
  "a": "<p>El precio depende del alcance y requerimientos específicos de cada proyecto. La cotización es gratis y sin compromiso: escríbenos por WhatsApp al +57 301 409 9377 para evaluar tu caso y darte el valor exacto.</p>",
  "next": [
   "cotizar",
   "contacto",
   "tiempos-entrega"
  ]
 },
 {
  "id": "tiempos-entrega",
  "t": "Plazos y tiempos de entrega",
  "p": [
   "cuanto tiempo demora el desarrollo",
   "en cuantos dias entregan",
   "cuanto tardan en hacer una pagina web",
   "cual es el plazo de entrega"
  ],
  "k": [
   "tiempo",
   "plazo",
   "duracion",
   "demora",
   "entrega",
   "cronograma",
   "dias"
  ],
  "a": "<p>El tiempo de entrega depende del alcance particular de cada proyecto. Escríbenos por WhatsApp para cotizar y acordar un cronograma adaptado a tus necesidades.</p>",
  "next": [
   "cotizar",
   "proceso",
   "contacto"
  ]
 },
 {
  "id": "nucleo-sin-internet",
  "t": "Núcleo funciona sin internet",
  "p": [
   "nucleo necesita internet para funcionar",
   "el sistema pos funciona sin conexion",
   "que pasa si se cae el internet con nucleo",
   "es un programa offline o en la nube"
  ],
  "k": [
   "internet",
   "offline",
   "conexion",
   "escritorio",
   "windows",
   "caida",
   "red"
  ],
  "a": "<p>Núcleo es un software de escritorio para Windows que funciona completamente sin internet. Tu negocio no se detendrá ni perderás ventas si la conexión falla.</p>",
  "next": [
   "nucleo",
   "nucleo-inventario-fifo",
   "nucleo-reportes"
  ]
 },
 {
  "id": "nucleo-inventario-fifo",
  "t": "Control de inventario FIFO en Núcleo",
  "p": [
   "como maneja el inventario el sistema nucleo",
   "maneja inventario por lotes",
   "que es el sistema de inventario fifo",
   "avisa cuando queda poco stock"
  ],
  "k": [
   "inventario",
   "lotes",
   "fifo",
   "stock",
   "existencias",
   "bodega",
   "costo"
  ],
  "a": "<p>Núcleo controla el inventario por lotes usando el método de costeo real FIFO (primero en entrar, primero en salir) e incluye alertas de stock bajo. Además, soporta presentaciones como unidad, paquete o caja con su propio precio.</p>",
  "next": [
   "nucleo",
   "nucleo-excel",
   "nucleo-reportes"
  ]
 },
 {
  "id": "nucleo-facturacion-dian",
  "t": "Funciones a la medida para Núcleo",
  "p": [
   "nucleo maneja facturacion electronica dian",
   "se puede integrar pagos con nequi o daviplata",
   "sirve para varias sedes",
   "permite crear usuarios para empleados"
  ],
  "k": [
   "dian",
   "facturacion",
   "nequi",
   "daviplata",
   "sedes",
   "sucursales",
   "permisos",
   "usuarios"
  ],
  "a": "<p>Núcleo se adapta a tus necesidades: podemos implementar a la medida funciones como facturación electrónica DIAN, catálogo por WhatsApp, pagos por Nequi o Daviplata, permisos por empleado y manejo de varias sedes. Escríbenos por WhatsApp para cotizar estas integraciones.</p>",
  "next": [
   "nucleo",
   "cotizar",
   "contacto"
  ]
 },
 {
  "id": "nucleo-excel",
  "t": "Importación y exportación con Excel en Núcleo",
  "p": [
   "puedo subir mis productos desde excel",
   "se puede exportar a excel",
   "como cargo el inventario sin digitar todo",
   "tiene catalogo de productos precargado"
  ],
  "k": [
   "excel",
   "importar",
   "exportar",
   "catalogo",
   "productos",
   "migrar",
   "datos"
  ],
  "a": "<p>Sí, Núcleo permite cargar y exportar productos y clientes directamente desde hojas de Excel. Además, incluye un catálogo de productos precargado para montar tu tienda sin tener que digitar todo desde cero.</p>",
  "next": [
   "nucleo",
   "nucleo-inventario-fifo",
   "nucleo-reportes"
  ]
 },
 {
  "id": "nucleo-reportes",
  "t": "Reportes y tiquetes en Núcleo",
  "p": [
   "que reportes genera nucleo",
   "imprime recibos en impresora termica",
   "abre cajon de dinero",
   "hace copias de seguridad de las ventas"
  ],
  "k": [
   "reportes",
   "ganancias",
   "impresora",
   "termica",
   "tiquetes",
   "cajon",
   "respaldos",
   "pdf"
  ],
  "a": "<p>Núcleo genera reportes de ingresos, costos y ganancias con exportación a PDF. También imprime tiquetes en impresoras térmicas de 80 mm, abre cajón monedero automáticamente y crea respaldos diarios de tu información.</p>",
  "next": [
   "nucleo",
   "nucleo-creditos",
   "nucleo-sin-internet"
  ]
 },
 {
  "id": "nucleo-creditos",
  "t": "Ventas a crédito y abonos en Núcleo",
  "p": [
   "se puede vender a credito en nucleo",
   "maneja cuentas por cobrar y fiado",
   "como registro abonos de clientes",
   "lleva el control de clientes que deben"
  ],
  "k": [
   "credito",
   "cartera",
   "fiado",
   "abonos",
   "cuentas",
   "deudas",
   "cobrar",
   "clientes"
  ],
  "a": "<p>Núcleo cuenta con módulo para ventas a crédito y administración de cartera de clientes. Te permite registrar abonos parciales, revisar saldos pendientes y llevar un control ordenado de tus cuentas por cobrar.</p>",
  "next": [
   "nucleo",
   "nucleo-reportes",
   "cotizar"
  ]
 },
 {
  "id": "paginas-web-movil",
  "t": "Adaptación a celulares y velocidad",
  "p": [
   "las paginas se ven bien en celulares",
   "el diseno es compatible con telefonos",
   "las paginas cargan rapido",
   "sitios web adaptados a pantallas moviles"
  ],
  "k": [
   "celular",
   "movil",
   "pantallas",
   "responsive",
   "adaptable",
   "diseno",
   "smartphones"
  ],
  "a": "<p>Todas nuestras páginas web se desarrollan adaptadas perfectamente a pantallas de celulares, tabletas y computadores. Aplicamos buenas prácticas de optimización para asegurar que carguen rápido y protejan tus datos con altos estándares de seguridad.</p>",
  "next": [
   "paginas-web",
   "paginas-web-chatbot",
   "contacto"
  ]
 },
 {
  "id": "paginas-web-idiomas",
  "t": "Sitios web en múltiples idiomas",
  "p": [
   "hacen paginas web en varios idiomas",
   "puedo tener un sitio web bilingue",
   "hacen paginas en ingles y espanol",
   "desarrollo de portales multilingues"
  ],
  "k": [
   "idiomas",
   "ingles",
   "trilingue",
   "multilingue",
   "traduccion",
   "bilingue"
  ],
  "a": "<p>Sí, desarrollamos sitios web preparados para varios idiomas. Por ejemplo, construimos el sitio web corporativo de la refinería Petroil S.A. disponible en tres idiomas diferentes.</p>",
  "next": [
   "paginas-web",
   "proyecto-petroil",
   "cotizar"
  ]
 },
 {
  "id": "paginas-web-chatbot",
  "t": "Asistente virtual sin costo mensual",
  "p": [
   "incluyen chatbot en la pagina web",
   "el asistente virtual cobra mensualidad",
   "como funciona el chat para clientes",
   "pueden poner un bot de preguntas frecuentes"
  ],
  "k": [
   "chatbot",
   "asistente",
   "chat",
   "preguntas",
   "mensualidad",
   "bot",
   "respuestas"
  ],
  "a": "<p>Podemos integrar en tu sitio web un asistente o chat para responder preguntas de tus visitantes mediante coincidencias de palabras clave. Lo desarrollamos sin mensualidades ni tarifas recurrentes por consumo de IA.</p>",
  "next": [
   "paginas-web",
   "proyecto-guardianes",
   "cotizar"
  ]
 },
 {
  "id": "paginas-web-multimedia",
  "t": "Fotografía y video profesional para la web",
  "p": [
   "toman fotos para la pagina web",
   "hacen videos para mi negocio",
   "quien crea el contenido visual de la web",
   "incluyen fotografia profesional para el sitio"
  ],
  "k": [
   "fotos",
   "videos",
   "fotografia",
   "multimedia",
   "produccion",
   "contenido",
   "camara"
  ],
  "a": "<p>Daniela produce las fotografías y los videos profesionales para tu página web o tu marca. Así logras un sitio visualmente llamativo con material auténtico de tu empresa.</p>",
  "next": [
   "daniela",
   "paginas-web",
   "cotizar"
  ]
 },
 {
  "id": "tesis-software",
  "t": "Desarrollo técnico de software para tesis",
  "p": [
   "programan el software de mi tesis",
   "hacen aplicaciones para proyectos de grado",
   "necesito la parte de programacion de mi tesis",
   "desarrollan sitios web para trabajos de grado"
  ],
  "k": [
   "software",
   "aplicacion",
   "app",
   "codigo",
   "programacion",
   "grado",
   "ingenieria"
  ],
  "a": "<p>Desarrollamos el software, la aplicación web o móvil y el análisis estadístico de datos que requiera tu proyecto de grado. Construimos soluciones funcionales listas para ser presentadas y sustentadas ante el jurado.</p>",
  "next": [
   "tesis",
   "tesis-sustentacion",
   "tesis-etica"
  ]
 },
 {
  "id": "tesis-sustentacion",
  "t": "Preparación de la sustentación y videos",
  "p": [
   "ayudan a preparar la sustentacion de grado",
   "hacen videos o trailer para la tesis",
   "crean paginas para presentar el proyecto de grado",
   "como me preparo para sustentar mi tesis"
  ],
  "k": [
   "sustentacion",
   "presentacion",
   "trailer",
   "video",
   "defensa",
   "diapositivas",
   "exposicion"
  ],
  "a": "<p>Te apoyamos con la creación de un sitio web para exhibir tu tesis, la edición de un video o tráiler promocional del proyecto y preparación técnica para tu sustentación. Así podrás exponer con seguridad ante los evaluadores.</p>",
  "next": [
   "tesis",
   "proyecto-guardianes",
   "contacto"
  ]
 },
 {
  "id": "tesis-etica",
  "t": "Compromiso ético con trabajos de grado",
  "p": [
   "ustedes escriben la tesis completa",
   "venden tesis ya hechas",
   "me redactan el marco teorico y conclusiones",
   "hacen el documento escrito de grado"
  ],
  "k": [
   "etica",
   "redaccion",
   "escrita",
   "documento",
   "autor",
   "fraude",
   "trabajo"
  ],
  "a": "<p>No vendemos tesis escritas. El estudiante es y debe ser el autor de su investigación académica; nosotros asesoramos y desarrollamos el soporte técnico, las herramientas de software y el análisis cuantitativo.</p>",
  "next": [
   "tesis",
   "tesis-software",
   "contacto"
  ]
 },
 {
  "id": "proyecto-petroil",
  "t": "Proyecto Petroil S.A.",
  "p": [
   "que hicieron para la empresa petroil",
   "como es el sitio web de petroil",
   "tienen experiencia con el sector de hidrocarburos",
   "hacen sitios web para refinerias"
  ],
  "k": [
   "petroil",
   "refineria",
   "petroleo",
   "trilingue",
   "seguridad",
   "intranet",
   "corporativo"
  ],
  "a": "<p>Desarrollamos el sitio corporativo de la refinería Petroil S.A. (petroilsa.com). Cuenta con soporte en tres idiomas, asistente virtual, fichas de producto, formularios PQRSF y cabeceras avanzadas de ciberseguridad.</p>",
  "next": [
   "proyectos",
   "paginas-web-idiomas",
   "ciberseguridad"
  ]
 },
 {
  "id": "proyecto-guardianes",
  "t": "Proyecto Guardianes del Viento",
  "p": [
   "que es el proyecto guardianes del viento",
   "como fue el sitio de tesis de la maestria wayuu",
   "que hicieron para parques eolicos en la guajira",
   "tienen ejemplos de sitios web para sustentaciones"
  ],
  "k": [
   "guardianes",
   "viento",
   "wayuu",
   "guajira",
   "eolicos",
   "alisio",
   "maestria",
   "mapa"
  ],
  "a": "<p>Creamos el sitio de presentación de la tesis de maestría «Guardianes del Viento», enfocado en una cooperativa wayuu y parques eólicos en La Guajira. Incluye un mapa de viento animado, el asistente virtual «Alisio» y un tráiler en video.</p>",
  "next": [
   "proyectos",
   "tesis",
   "paginas-web-chatbot"
  ]
 },
 {
  "id": "proyecto-salud-mental",
  "t": "Plataforma de salud mental (BPIN)",
  "p": [
   "que es la plataforma bpin de salud mental",
   "han trabajado en proyectos con recursos publicos",
   "que experiencia tienen con investigacion publica",
   "plataforma de salud mental registrada en derechos de autor"
  ],
  "k": [
   "bpin",
   "salud",
   "mental",
   "investigacion",
   "publicos",
   "pacientes",
   "derecho",
   "autor"
  ],
  "a": "<p>Edwin coordinó el desarrollo de una plataforma web de salud mental para un proyecto de investigación con recursos públicos (BPIN). El sistema atendió a más de 5.000 personas y quedó formalmente registrado ante la Dirección Nacional de Derecho de Autor.</p>",
  "next": [
   "proyectos",
   "edwin",
   "equipo"
  ]
 },
 {
  "id": "proyecto-vr-zone",
  "t": "Pioneros en VR Zone Arcade",
  "p": [
   "que es el proyecto vr zone",
   "tienen experiencia en realidad virtual",
   "que fue vr zone santa marta",
   "centro de videojuegos arcade vr"
  ],
  "k": [
   "vr",
   "zone",
   "realidad",
   "virtual",
   "arcade",
   "calificacion",
   "emprendimiento"
  ],
  "a": "<p>Edwin fundó VR Zone, el primer centro de realidad virtual arcade de Santa Marta, alcanzando una destacada calificación pública de 4,8 sobre 5 gracias a su tecnología e innovación.</p>",
  "next": [
   "edwin",
   "proyectos",
   "equipo"
  ]
 },
 {
  "id": "ciberseguridad",
  "t": "Consultoría en ciberseguridad empresarial",
  "p": [
   "ofrecen servicios de ciberseguridad",
   "hacen endurecimiento de servidores",
   "auditan la seguridad de redes y sistemas",
   "consultoria de seguridad para empresas"
  ],
  "k": [
   "ciberseguridad",
   "seguridad",
   "servidores",
   "redes",
   "endurecimiento",
   "diagnostico",
   "proteccion"
  ],
  "a": "<p>Ofrecemos consultoría especializada en ciberseguridad que incluye diagnóstico, endurecimiento de servidores y revisión de redes corporativas. Edwin dirige actualmente la ciberseguridad y la intranet de una refinería de petróleo en Santa Marta.</p>",
  "next": [
   "servicios",
   "proyecto-petroil",
   "cotizar"
  ]
 },
 {
  "id": "analitica-datos",
  "t": "Análisis de datos y tableros",
  "p": [
   "hacen analisis de datos y estadistica",
   "crean tableros de control para negocios",
   "hacen dashboards de indicadores",
   "servicio de analisis de datos"
  ],
  "k": [
   "analitica",
   "datos",
   "tableros",
   "estadistica",
   "dashboards",
   "metricas",
   "indicadores"
  ],
  "a": "<p>Realizamos análisis de datos, procesamiento estadístico y construcción de tableros de control para empresas o proyectos de investigación. Cuéntanos qué datos necesitas procesar escribiéndonos por WhatsApp para brindarte una cotización a tu medida.</p>",
  "next": [
   "servicios",
   "tesis",
   "cotizar"
  ]
 },
 {
  "id": "soporte-postentrega",
  "t": "Acompañamiento y soporte post-entrega",
  "p": [
   "dan soporte despues de entregar la pagina",
   "que pasa si tengo dudas despues de la entrega",
   "ofrecen acompanamiento y mantenimiento",
   "capacitan sobre como usar el sistema"
  ],
  "k": [
   "soporte",
   "garantia",
   "capacitacion",
   "postentrega",
   "acompanamiento",
   "ayuda",
   "mantenimiento"
  ],
  "a": "<p>Nuestro trabajo continúa después de publicar: brindamos acompañamiento continuo, soporte técnico y capacitación para que puedas operar tu solución tecnológica con total confianza y tranquilidad.</p>",
  "next": [
   "proceso",
   "paginas-web",
   "nucleo"
  ]
 },
 {
  "id": "cobertura-nacional",
  "t": "Cobertura en toda Colombia",
  "p": [
   "trabajan con clientes fuera de santa marta",
   "puedo contratar si estoy en bogota o medellin",
   "atienden en otras ciudades del pais",
   "como trabajan con clientes a distancia"
  ],
  "k": [
   "cobertura",
   "nacional",
   "colombia",
   "remoto",
   "bogota",
   "medellin",
   "barranquilla",
   "distancia"
  ],
  "a": "<p>Trabajamos con clientes de toda Colombia. Coordinamos reuniones virtuales periódicas y te mostramos avances en línea para que desarrolles tu proyecto con total cercanía, estés donde estés.</p>",
  "next": [
   "ubicacion",
   "contacto",
   "proceso"
  ]
 }
];
