# Tema-6
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>App Web: Organización Espacios y Tiempo EI</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@700;900&family=Inter:wght@400;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
    <style>
        /* Apply Fonts */
        body {
            font-family: 'Inter', sans-serif; /* Default readable font */
            background-color: #f7f8fc; /* Lighter, cleaner background */
            transition: background-color 0.3s ease; /* Smooth transition for potential theme changes */
        }
        h1, h2, .nav-button, .quiz-question strong { /* Apply Poppins to more elements */
            font-family: 'Poppins', sans-serif;
        }

        /* General Styles */
        .content-section {
            display: none; /* Hide sections by default */
        }
        .content-section.active {
            display: block; /* Show active section */
        }

        /* Navigation Styles */
        .nav-button {
            @apply flex-1 px-4 py-3 text-center font-bold text-lg rounded-lg shadow-md transition-all duration-300 ease-in-out cursor-pointer;
        }
        .nav-button.active {
            @apply bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white scale-105 shadow-xl;
        }
        .nav-button:not(.active) {
            @apply bg-white text-gray-600 hover:bg-gray-100 hover:text-indigo-600;
        }

        /* Content Styles (Copied and adapted from previous HTML) */
         h1 {
            @apply text-4xl md:text-5xl font-black text-center my-10 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500;
        }
         h2 {
             @apply text-2xl md:text-3xl font-bold mt-10 mb-6 p-5 rounded-xl shadow-lg text-white bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 flex items-center;
         }
         h2 i {
             @apply mr-3 text-xl opacity-90;
         }
         h3 {
             @apply text-xl md:text-2xl font-bold mt-8 mb-4 text-indigo-700 underline decoration-indigo-300 decoration-2 underline-offset-4;
         }
         h4 {
              @apply text-base font-semibold mt-5 mb-2 text-purple-800 uppercase tracking-wider;
         }
         ul {
             @apply list-none pl-5 mb-5 space-y-2 text-gray-700;
         }
         ul li::before {
            content: "\f00c";
            font-family: "Font Awesome 6 Free";
            font-weight: 900;
            @apply text-pink-500 mr-3 inline-block;
         }
         .bibliography-list li::before, .index-list li::before, .conditions-list li::before, .criteria-list li::before, .workshop-list li::before, .corner-list li::before, .zone-list li::before, .needs-list li::before, .rhythm-list li::before, .routine-list li::before, .evaluation-criteria-list li::before, .legislation-list li::before {
             content: "\f105";
             @apply text-purple-500;
         }
         .evaluation-aspects-list li::before {
             content: "\2022";
             @apply text-purple-500 text-xl;
         }
         li strong {
             @apply font-semibold text-indigo-900;
         }
         ol {
             @apply list-decimal list-inside ml-4 mb-5 space-y-2 text-gray-700;
         }
         p {
             @apply mb-4 text-base md:text-lg leading-relaxed text-gray-800;
         }
         .section-container {
             @apply bg-gradient-to-br from-white to-purple-50 p-6 md:p-8 rounded-2xl shadow-xl mb-8 border border-gray-100;
         }
         .bibliography-item {
             @apply mb-2 text-sm md:text-base;
         }
         .highlight {
             @apply bg-pink-100 px-2 py-1 rounded-md font-semibold text-pink-800 shadow-sm;
         }
         .important-note {
             @apply bg-teal-50 border-l-4 border-teal-400 text-teal-800 p-5 rounded-lg my-6 shadow-md flex items-start;
         }
         .important-note i {
             @apply text-teal-500 text-xl mr-3 mt-1 flex-shrink-0;
         }
         .page-break {
            @apply text-center text-xs text-gray-400 my-6 py-2 border-t border-b border-gray-200 font-mono;
         }
         .index-item {
             @apply mb-1;
         }
         .reference {
            @apply font-mono text-xs bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded border border-indigo-200; /* Styled reference */
         }
         .fa-school, .fa-clock, .fa-tasks, .fa-redo-alt, .fa-clipboard-check, .fa-flag-checkered, .fa-book, .fa-chalkboard-user, .fa-book-open-reader { color: white; }

        /* Quiz Specific Styles */
        .quiz-question {
            @apply mb-8 p-6 bg-white rounded-lg shadow-md border border-gray-200 transition-all duration-300;
        }
         .quiz-question.unanswered { /* Style for unanswered questions on submit */
             @apply border-red-400 border-2 shadow-red-100;
         }
        .quiz-question strong {
            @apply block mb-4 text-lg text-indigo-800; /* Question text */
        }
        .quiz-options label {
            @apply block mb-3 p-3 border border-gray-300 rounded-lg cursor-pointer transition-all duration-200 ease-in-out hover:bg-indigo-50 hover:border-indigo-400;
        }
         .quiz-options input[type="radio"]:disabled + span { /* Style text when disabled */
             @apply text-gray-500;
         }
         .quiz-options input[type="radio"] {
            @apply mr-3 accent-pink-500 w-4 h-4 align-middle; /* Style radio button */
        }
        /* Feedback Styles */
         .quiz-options label.correct {
            @apply bg-green-100 border-green-500 text-green-800 font-semibold;
         }
         .quiz-options label.incorrect {
             @apply bg-red-100 border-red-500 text-red-800 font-semibold;
         }
         .feedback-message {
             @apply mt-2 text-sm font-medium pl-7; /* Indent feedback */
         }
         .feedback-message.correct {
             @apply text-green-600;
         }
         .feedback-message.incorrect {
             @apply text-red-600;
         }
         /* Button Styles */
        .quiz-button {
            @apply mt-6 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed;
        }
        #quiz-results {
            @apply mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-lg shadow-lg text-center;
        }
         #quiz-results h3 {
            @apply text-2xl font-bold text-indigo-800 mb-3 underline-offset-4;
         }
         #quiz-results p {
             @apply text-xl text-gray-700 font-semibold;
         }
          #quiz-results span {
             @apply font-black text-purple-700;
         }

    </style>
</head>
<body class="p-4 md:p-8">

    <div class="max-w-5xl mx-auto"> <nav class="flex space-x-4 mb-8 sticky top-4 z-10 bg-opacity-80 backdrop-blur-sm p-2 rounded-xl shadow">
            <button id="nav-tema" class="nav-button active" onclick="showSection('tema')">
                <i class="fas fa-book-open mr-2"></i>Tema 16
            </button>
            <button id="nav-preguntas" class="nav-button" onclick="showSection('preguntas')">
                <i class="fas fa-question-circle mr-2"></i>Preguntas
            </button>
        </nav>

        <main id="content-area">

            <section id="tema" class="content-section active">
                <div class="section-container bg-gradient-to-br from-gray-50 to-indigo-50 shadow-lg mb-10">
                    <h1 class="!text-3xl !mb-5 !text-gray-800">TEMA 16</h1>
                    <p class="text-center font-semibold text-xl text-gray-900 mb-8 leading-tight">LA ORGANIZACIÓN DE LOS ESPACIOS Y DEL TIEMPO.<br>CRITERIOS, RITMOS, RUTINAS Y EVALUACIÓN.</p>
                    <ol class="list-none pl-0 space-y-1.5 text-sm md:text-base index-list">
                         <li class="index-item"><strong>1.-</strong> INTRODUCCIÓN.</li>
                         <li class="index-item"><strong>2.-</strong> IMPLICACIÓN CURRICULAR.</li>
                         <li class="index-item"><strong>3.-</strong> LA ORGANIZACIÓN DE LOS ESPACIOS.</li>
                         <li class="index-item ml-4"><strong>3.1.-</strong> El edificio escolar.</li>
                         <li class="index-item ml-4"><strong>3.2.-</strong> Los espacios exteriores.</li>
                         <li class="index-item ml-4"><strong>3.3.-</strong> La organización del aula.</li>
                         <li class="index-item"><strong>4.-</strong> LA ORGANIZACIÓN DEL TIEMPO.</li>
                         <li class="index-item"><strong>5.-</strong> CRITERIOS PARA UNA ADECUADA DISTRIBUCIÓN Y ORGANIZACIÓN ESPACIAL Y TEMPORAL.</li>
                         <li class="index-item ml-4"><strong>5.1.-</strong> Criterios para la organización espacial.</li>
                         <li class="index-item ml-4"><strong>5.2.-</strong> Criterios para la organización temporal.</li>
                         <li class="index-item"><strong>6.-</strong> RITMOS Y RUTINAS COTIDIANAS.</li>
                         <li class="index-item ml-4"><strong>6.1.-</strong> Los ritmos.</li>
                         <li class="index-item ml-4"><strong>6.2.-</strong> Las rutinas.</li>
                         <li class="index-item"><strong>7.-</strong> LA EVALUACIÓN DE LOS ESPACIOS Y DEL TIEMPO.</li>
                         <li class="index-item ml-4"><strong>7.1.-</strong> Criterios para la evaluación de los espacios.</li>
                         <li class="index-item ml-4"><strong>7.2.-</strong> Criterios para la evaluación del tiempo.</li>
                         <li class="index-item ml-4"><strong>7.3.-</strong> La importancia de la formación del profesorado.</li>
                         <li class="index-item"><strong>8.-</strong> CONCLUSIÓN.</li>
                         <li class="index-item"><strong>9.-</strong> BIBLIOGRAFÍA.</li>
                    </ol>
                </div>
                <div class="page-break">Página 1</div>

                <div class="section-container">
                    <h2><i class="fas fa-chalkboard-user"></i>1.- INTRODUCCIÓN</h2>
                    <p>El espacio y el tiempo son elementos <span class="highlight">fundamentales</span> del proceso de enseñanza-aprendizaje. Así, el tema que desarrollaremos es de gran importancia para comprender cuál es la organización espacial y temporal que mejor apoya nuestra labor educativa y permite al niño/a moverse, observar, crear, imaginar, comunicar y relacionarse con los demás en el ámbito escolar.</p>

                    <h2><i class="fas fa-book-open-reader"></i>2.- IMPLICACIÓN CURRICULAR</h2>
                    <p>En el artículo 12.3 de la actual Ley Orgánica 3/2020, de 29 de diciembre, por la que se modifica la Ley Orgánica 2/2006, de 3 de mayo, de Educación (en adelante <span class="reference">LOMLOE</span>), se hace mención que la finalidad de esta etapa educativa no es otra que la <strong>educación integral</strong> del alumnado, de ahí la importancia de llevar a cabo una metodología globalizadora, basada en un aprendizaje significativo y funcional.</p>
                    <p>En el Anexo 1 de la Orden de 30 de mayo de 2023, por la que se desarrolla el currículo de Educación Infantil en Andalucía, la atención a la diversidad y a las diferencias individuales, la evaluación del proceso de aprendizaje del alumnado y los procesos de tránsito entre ciclos y con Educación Primaria (<span class="reference">JJAA. 2023</span>), se establece que la vida escolar se debe organizar en torno a <span class="highlight">rutinas estables</span> que marcarán los tiempos y los modos adecuados para los aprendizajes del alumnado en interacción con objetos, espacios y materiales.</p>
                    <p>Todos estos aspectos metodológicos, a nivel de centro, quedarán reflejados en las <strong>Propuestas Pedagógicas</strong> de la etapa para tomarlos como referencia en las <strong>Programaciones de Aula</strong>.</p>

                    <h2><i class="fas fa-school"></i>3.- LA ORGANIZACIÓN DE LOS ESPACIOS</h2>
                    <p>Hay que planificar el espacio de todo el centro para que tanto los docentes como el alumnado y sus familias y toda la comunidad educativa participen cooperativamente en la vida de éste (TAVERNIER, R. 1991). Así, dentro del centro escolar existen tres tipos de espacios que debemos organizar para darles un uso y una intención:</p>

                    <h3>3.1.- El edificio escolar</h3>
                    <p>Para que un edificio escolar sea adecuado, debe cumplir tres tipos de condiciones:</p>
                    <h4>a) CONDICIONES PEDAGÓGICAS:</h4>
                    <ul class="conditions-list">
                        <li><strong>La adaptabilidad:</strong> posibilidad de que un edificio pueda admitir cambios.</li>
                        <li><strong>La flexibilidad:</strong> posibilidades de variación de un espacio, que sean convertibles y moldeables.</li>
                        <li><strong>Comunicabilidad</strong> entre los espacios.</li>
                    </ul>
                    <h4>b) CONDICIONES FÍSICAS:</h4>
                    <ul class="conditions-list">
                        <li>La ubicación, alejado de zonas peligrosas.</li>
                        <li>La orientación.</li>
                        <li>Accesibilidad y supresión de barreras exigidas por la legislación.</li>
                        <li>La estructura de las aulas, una sola planta agrupadas de forma lineal (aulas al lado de otras) o nucleadas (de forma circular o poligonal).</li>
                        <li>Dependencias suficientes: salas de descanso, servicios, sala de usos múltiples...</li>
                        <li>Condiciones acústicas favorables.</li>
                        <li>La iluminación, suficiente luz natural.</li>
                        <li>La ventilación natural.</li>
                        <li>Una calefacción adecuada.</li>
                        <li>Medidas de seguridad: protección en puertas, escaleras y barandillas, cierres de seguridad en ventanas.</li>
                    </ul>
                     <h4>c) CONDICIONES GENERALES.</h4>
                     <p>De acuerdo con el Real Decreto 132/2010, de 12 de febrero, por el que se establecen los requisitos mínimos de los centros que imparten las enseñanzas del segundo ciclo de Educación Infantil, la Educación Primaria y la Educación Secundaria, los centros de Educación Infantil:</p>
                </div>
                 <div class="page-break">Página 2</div>

                 <div class="section-container">
                     <ul class="mt-0 conditions-list"> <li>Tendrán un mínimo de <strong>tres unidades</strong> y contarán con unas instalaciones mínimas:
                            <ul class="list-none ml-6 mt-1 space-y-0.5">
                                <li>- Un aula por cada unidad</li>
                                <li>- Un patio de juegos, parcialmente cubierto</li>
                                <li>- Aseos adecuados para los alumnos y para el personal docente</li>
                                <li>- Aseos adaptados para personas con discapacidad</li>
                                <li>- Una sala polivalente</li>
                                <li>- Un despacho de dirección, una secretaría y una sala de profesores.</li>
                                <li>- Espacios para los apoyos al alumnado con NEAE.</li>
                                <li>- Espacios para el AMPA</li>
                            </ul>
                         </li>
                         <li>Tendrá una ratio máxima de <strong>25 alumnos/as</strong> por aula.</li>
                         <li>Los maestros/as de Educación Infantil deben poseer la especialidad que imparten.</li>
                     </ul>

                    <h3>3.3.- La organización del aula</h3> <p>Siguiendo a IBAÑEZ SANDÍN, C. (2010), la organización del espacio del aula estimula o inhibe el desarrollo y aprendizaje de los niños/as. Así, las formas de organizar las actividades más generalizadas en el aula son los <span class="highlight">rincones</span> y los <span class="highlight">talleres</span>.</p>
                    <p>Los <strong>rincones</strong> son espacios polivalentes organizados dentro del aula y que propiciarán la investigación, la imaginación, la manipulación, etc.</p>
                    <p>Dependiendo de los intereses del grupo y del estilo educativo de cada maestro/a, existen diversas formas de trabajar por rincones:</p>
                    <ul class="corner-list">
                        <li>A tiempo parcial, sólo en momentos específicos de la jornada escolar.</li>
                        <li>De forma más permanente.</li>
                    </ul>
                    <p>El trabajo por rincones requiere:</p>
                    <ul class="corner-list">
                        <li>Preparar el espacio y el material de cada rincón.</li>
                        <li>Diseñar actividades y técnicas propias de las mismas.</li>
                        <li>Establecer normas para cada rincón consensuadas con los alumnos: cuándo se rota, número máximo de alumnos en cada uno, cuidado y reposición del material y evaluación de su funcionamiento.</li>
                        <li>Ayudar al niño/a a desenvolverse de forma autónoma.</li>
                        <li>Estimularles para que disfruten de todos los rincones.</li>
                    </ul>
                    <p>Los rincones más comunes son los siguientes:</p>
                    <ul class="corner-list">
                        <li><strong>Rincón del juego simbólico:</strong> permite que los niños/as escenifiquen distintas situaciones de la vida cotidiana. Contará con los siguientes materiales: todo tipo de juguetes, muñecos, peluches, animales de plástico, cocinita, alimentos de plástico, juegos de mesa, coches, médicos, pelotas, disfraces, maquillaje, títeres...</li>
                        <li><strong>Rincón de plástica o del arte:</strong> permite potenciar al máximo la creatividad y la expresión libre del niño/a utilizando técnicas (collage, estampación, coloreado, pintura, modelado, rasgados etc.) y materiales plásticos: material de pintura (pinceles, témperas, pintura de dedos), material de papel (cartulina, cartones, charol, celofán), material de modelado (plastilina, arcilla), material de la naturaleza (piedras, conchas), material reciclado (palos de helado, pinzas, cajas de cartón), otros materiales (tijeras de punta redonda, caballetes, bayetas, toallas).</li>
                        <li><strong>Rincón de las experiencias:</strong> permite a los niños observar, investigar, descubrir, transformar, manipular... Destacan materiales como: brújulas, imanes, lupas, recetas médicas inservibles, sellos de caucho... Algunas actividades podrán ser con barro, agua, bicarbonato... o experiencias con la naturaleza como el cuidado de una planta o un pequeño animal, entre otras.</li>
                    </ul>
                </div>
                <div class="page-break">Página 3</div>

                <div class="section-container">
                    <ul class="mt-0 corner-list"> <li><strong>Rincón del lenguaje o de las letras:</strong> permite iniciar a los niños/as en el proceso de lectoescritura al mismo tiempo que fomentamos la expresión oral. Además, permite acercar al niño/a al maravilloso mundo de los cuentos. Constará de materiales como tarjetas de vocabulario, imágenes, juegos de letras, pictogramas, letras móviles, cuentos, etc.</li>
                         <li><strong>Rincón lógico-matemático:</strong> permite iniciar a los niños en el desarrollo de conceptos lógicos-matemáticos básicos: contar, comparar, asociar, clasificar, seriar, etc. Dispondremos de materiales como: puzzles, lotos, dominós, bloques lógicos, regleta, balanza, geoplano, juegos de secuencias temporales, etc.</li>
                         <li><strong>Rincón tecnológico:</strong> permite familiarizar a los niños/as con el uso de las nuevas tecnologías, además de reforzar, complementar y ampliar los contenidos trabajados. Constará de un ordenador, una impresora, pizarra digital, tablet, etc.</li>
                    </ul>
                    <p>Siguiendo a TRUEBA, B. (2012), los <strong>talleres</strong> son otra forma de organizar el tiempo en infantil. Tienen el objetivo de realizar determinadas actividades secuenciadas y muy dirigidas por el docente para conseguir que el niño/a conozca diferentes técnicas y recursos que podrán usar de forma personal y creativa en otras situaciones posteriores.</p>
                    <p>Los talleres pueden ser: fijos o variables, permanentes o rotativos en el tiempo, en pequeño grupo o en gran grupo, con niños de igual edad o de diferente edad, etc.</p>
                    <p>Además, en la puesta en práctica de los talleres podrán participar las familias de los alumnos/as aportando sus conocimientos al grupo clase.</p>
                    <p>Los talleres más comunes son:</p>
                    <ul class="workshop-list">
                         <li><strong>Taller de cocina:</strong> para concienciar de la importancia de una alimentación saludable.</li>
                         <li><strong>Taller de disfraces:</strong> para sensibilizar de la importancia de elaborarlos por nosotros mismos utilizando materiales reciclados.</li>
                         <li><strong>Taller de costura creativa:</strong> para que aprendan a coser a la vez que utilizan su creatividad para realizar sus propios diseños.</li>
                    </ul>

                    <h3>3.2.- Los espacios exteriores</h3> <p>El patio será un espacio educativo más en nuestras actividades diarias. Por ello, debemos mantenerlo cuidado y en perfectas condiciones, puesto que va a propiciar intercambios y nuevas experiencias de manipulación y experimentación en las vivencias de los niños/as.</p>
                    <p>Deberá cumplir las siguientes condiciones:</p>
                    <ul class="conditions-list">
                        <li>Espacio amplio.</li>
                        <li>Con acceso directo desde las aulas.</li>
                        <li>Con espacios al sol y a la sombra.</li>
                        <li>Suelo variado (arena, tierra, cemento).</li>
                        <li>Espacios adaptados a las necesidades de los niños/as: movimiento/descanso, imitación/creación, ficción/realidad, juegos individuales y colectivos, etc.</li>
                    </ul>
                    <p>Se podrán crear distintas zonas:</p>
                     <ul class="zone-list">
                         <li><strong>Parque:</strong> con elementos para trepar, saltar, hacer ejercicios de equilibrio...</li>
                         <li><strong>Juegos de representación:</strong> casita de madera, cabaña...</li>
                         <li><strong>Juegos de arena y agua:</strong> con cubos, palas, regaderas...</li>
                         <li><strong>Juegos deportivos:</strong> juegos pintados con pintura, pistas de obstáculos, colocar una canasta o una portería de fútbol, hacer ejercicios de educación vial...</li>
                         <li><strong>Huerto:</strong> para observar y desarrollar experiencias.</li>
                         <li><strong>Zona de descanso:</strong> protegida de la lluvia y del sol.</li>
                         <li><strong>Zona de trabajo:</strong> para hacer actividades que no necesiten hacerse en clase.</li>
                     </ul>


                    <h2><i class="fas fa-clock"></i>4.- LA ORGANIZACIÓN DEL TIEMPO</h2>
                    <p>La organización del tiempo en Educación Infantil incluye tres momentos que son complementarios.</p>
                    <ul class="list-none pl-0 space-y-2">
                        <li><i class="fas fa-calendar-alt text-purple-500 mr-2"></i><strong>LA ORGANIZACIÓN DE LA JORNADA ESCOLAR.</strong> Queda regulada por el Decreto 301/2009 de 14 de julio, por el que se regula el calendario y la jornada escolar en los centros docentes, a excepción de los universitarios (<span class="reference">JJ.AA. 2009</span>).</li>
                    </ul>
                </div>
                <div class="page-break">Página 4</div>

                <div class="section-container">
                     <ul class="mt-0 list-none pl-0 space-y-2"> <li><i class="fas fa-users text-purple-500 mr-2"></i><strong>ATENCIÓN A LAS FAMILIAS A TRAVÉS DE REUNIONES Y TUTORÍAS.</strong> Cumpliendo con una de nuestras funciones como docentes, fomentaremos en todo momento la relación y colaboración familia-escuela, de acuerdo con el artículo 17.3 del Decreto 100/2023, de 9 de mayo por el que se establece la ordenación y el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de Andalucía (<span class="reference">JJ.AA. 2023</span>).</li>
                         <li><i class="fas fa-chalkboard-teacher text-purple-500 mr-2"></i><strong>COORDINACIÓN CON EL EQUIPO DOCENTE.</strong> Los equipos docentes organizarán reuniones de nivel, ciclo, ETCP, claustro, actividades de perfeccionamiento... con el fin de compartir información y de trabajar para prevenir los problemas de aprendizaje que puedan presentar.</li>
                         <li><i class="fas fa-hourglass-half text-purple-500 mr-2"></i><strong>ORGANIZACIÓN DEL TIEMPO EN EL AULA DE INFANTIL.</strong> La Orden del 5 de agosto de 2008 (<span class="reference">JJ.AA. 2008</span>) establece que el tiempo ha de organizarse de forma flexible, respetando en todo momento los ritmos biológicos de los niños/as (actividad, juego, alimentación, descanso, etc.). Más tarde, los niños/as adquieren pautas temporales de origen social (rutinas) marcadas por los docentes.</li>
                    </ul>
                    <p>La Orden de 30 de mayo de 2023 (<span class="reference">JJ.AA. 2023</span>) establece que la vida escolar se debe organizar en torno a <span class="highlight">rutinas estables</span> teniendo en cuenta los ritmos biológicos y la adquisición progresiva de hábitos saludables de alimentación, higiene, movimiento y descanso, que marcarán también los tiempos y los modos adecuados para los propios aprendizajes y características del alumnado.</p>
                    <p>La organización del tiempo en infantil supone coordinar tres necesidades:</p>
                    <ul class="needs-list">
                         <li><strong>Del niño:</strong> tiempo para el desarrollo y aprendizaje del niño, la expresión y comunicación, la autonomía, el juego y la socialización, respetando sus necesidades e iniciativas, alternando el movimiento y el descanso (teniendo en cuenta la curva de fatigabilidad) y compaginando los tipos de agrupamientos: gran grupo, pequeño grupo e individual.</li>
                         <li><strong>Educativas:</strong> el tiempo en la organización de la jornada escolar como: tiempo para el desarrollo de las actividades de los SDA, actividades complementarias (fiestas, visitas, talleres, salidas...), celebración de efemérides...</li>
                         <li><strong>Sociales:</strong> de horarios coordinados entre los distintos miembros de la comunidad escolar.</li>
                    </ul>

                    <h2><i class="fas fa-tasks"></i>5.- CRITERIOS PARA UNA ADECUADA DISTRIBUCIÓN Y ORGANIZACIÓN ESPACIAL Y TEMPORAL</h2>
                    <p>Los criterios generales para ambos son:</p>
                    <ul class="criteria-list">
                        <li>Tener en cuenta la edad y necesidades de los niños/as (movimiento, afectivas, autonomía, hábitos...).</li>
                        <li>Analizar las condiciones existentes de los espacios (interiores y exteriores) y los materiales.</li>
                        <li>Realizar actividades individuales y grupales.</li>
                    </ul>
                    <p>A continuación, pasamos a citar algunos de los criterios específicos para cada una.</p>
                    <h3>5.1.- Criterios para la organización espacial</h3>
                    <ul class="criteria-list">
                        <li>Crear un ambiente <span class="highlight">estimulante, seguro y conocido</span> con un mobiliario adaptado.</li>
                        <li>Cuidaremos que la decoración de nuestro centro y de nuestra aula sea familiar, acogedora, con luz adecuada, buena ventilación...</li>
                        <li>Ofrecer posibilidades de manipulación, observación y de juego.</li>
                        <li>Fomentar la autonomía poniendo los materiales al alcance de todos para poder elegirlos conectando con sus intereses, lo cual propiciará aprendizajes significativos.</li>
                        <li>Tener en cuenta la diversidad existente en el aula, por ello, dispondremos de zonas útiles para todos y con material diverso y polivalente para atender a todos los ritmos de aprendizaje.</li>
                    </ul>
                    <h3>5.2.- Criterios para la organización temporal</h3>
                    <ul class="criteria-list">
                        <li>Respetar los ritmos biológicos, teniendo en cuenta la curva de fatigabilidad, alternando actividades de movimiento con aquellas más tranquilas, actividades más motivadoras y de más atención, con actividades más manipulativas que requieran menos atención.</li>
                        <li>Partir de la edad y desarrollo cognitivo de los niños/as.</li>
                    </ul>
                </div>
                 <div class="page-break">Página 5</div>

                 <div class="section-container">
                     <ul class="mt-0 criteria-list"> <li>Contemplar los ritmos individuales y las necesidades e intereses del grupo, haciendo organizaciones flexibles.</li>
                         <li>Adecuarlo a la distribución espacial.</li>
                         <li>Respetar la globalidad del niño/a.</li>
                         <li>Disponer de ritmos y rutinas adecuadas.</li>
                    </ul>

                    <h2><i class="fas fa-redo-alt"></i>6.- RITMOS Y RUTINAS COTIDIANAS</h2>
                    <h3>6.1.- Los ritmos</h3>
                    <p>Son la sucesión de hechos que marcan la vida infantil. Según GALLEGO, J.L. (2009), los ritmos que rigen la actividad del centro se pueden clasificar de la siguiente manera:</p>
                    <ul class="rhythm-list">
                        <li><strong>Ritmos personales o ritmos biológicos</strong> (actividad, juego, alimentación, descanso, etc.).</li>
                        <li><strong>Ritmos ambientales,</strong> incluyen los ciclos de la naturaleza y las conmemoraciones sociales y culturales (fiestas sociales, Navidad, Carnaval, etc.).</li>
                        <li><strong>Ritmos escolares o jornada escolar,</strong> es decir, la clasificación de días lectivos o no lectivos.</li>
                    </ul>
                    <h3>6.2.- Las rutinas</h3>
                    <p>Son el hábito de hacer algo de forma sistemática y continua a lo largo de la jornada escolar y durante todos los días. Hacen posible que los niños/as construyan sus primeras nociones temporales y crean climas <span class="highlight">seguros y estables</span>.</p>
                    <p>Para ZABALZA (2002), las rutinas se basan en repetir actividades y ritmos en la organización espacio-temporal del aula y tienen la virtualidad de hacer funciones destacadas en la configuración del contexto educativo.</p>
                    <p>Las rutinas diarias, aunque son variables dependiendo del docente, están organizadas en los siguientes momentos:</p>
                    <ol class="routine-list">
                        <li><strong>Rutinas de entrada:</strong> despedida de la familia, saludo, acogida, cuelgan sus mochilas y abrigos. Conversaciones espontáneas.</li>
                        <li><strong>Asamblea:</strong> el encargado pasa lista, cuenta cuántos somos en clase, quién se queda en el comedor, el tiempo que hace, el calendario. Conversación, propuesta del plan de trabajo o del proyecto que está en marcha.</li>
                        <li><strong>Acción como tal:</strong> rincones de trabajo.</li>
                        <li><strong>Higiene y desayuno:</strong> recogida del material, hábitos de higiene, desayunamos, limpieza e higiene.</li>
                        <li><strong>Recreo:</strong> juegos de patio (patios inclusivos).</li>
                        <li><strong>Higiene y relajación</strong> (música, poesía, etc.).</li>
                        <li><strong>Actividades que necesiten menos atención</strong> (cuentos, talleres, musicales, audiovisuales, psicomotricidad).</li>
                        <li><strong>Asamblea de recuerdo y despedida:</strong> recordamos lo aprendido, recogida de la clase y preparación para irse a casa (coger sus cosas, ponerse chaqueta o abrigo...) o para ir al comedor (rutinas de higiene).</li>
                    </ol>
                    <p>Estas rutinas se verán interrumpidas por la entrada de los especialistas, la realización de talleres con la participación de las familias y por acontecimientos tales como salidas, visitas, actividades de interciclo, celebración de efemérides, etc.</p>
                    <div class="important-note">
                        <i class="fas fa-hands-helping"></i>
                        <p>Debido a la importancia de la <strong>colaboración entre escuela y familia</strong> en esta etapa, los hábitos que se trabajen en clase deben ser reforzados en casa. Debemos informarles de éstos a través de las diferentes reuniones que desarrollaremos.</p>
                    </div>

                    <h2><i class="fas fa-clipboard-check"></i>7.- LA EVALUACIÓN DE LOS ESPACIOS Y DEL TIEMPO</h2>
                    <p>Partiendo del artículo 11 del Decreto 100/2023, de 9 de mayo (<span class="reference">JJ.AA. 2023</span>), la evaluación será <span class="highlight">global, continua y formativa</span>. La <strong>observación directa y sistemática</strong> será la técnica principal de evaluación y tendrá en cuenta el grado de desarrollo de las competencias clave y su progreso en el aprendizaje, tomando como referencia los criterios de evaluación establecidos para cada ciclo en cada una de las áreas.</p>
                </div>
                 <div class="page-break">Página 6</div>

                <div class="section-container">
                    <p>Se utilizarán distintas estrategias, técnicas y recursos adaptadas a las características de cada ciclo, así como a las condiciones iniciales individuales, al ritmo y a las características de la evolución de cada niño o niña (teniendo en cuenta a nuestro alumnado NEAE).</p>
                    <p>Iniciaremos la evaluación con el análisis del propio proyecto, de cada elemento: objetivos, saberes básicos (antiguos contenidos), recursos, organización del espacio y el tiempo, agrupamientos y formas de relación entre los niños/as, de éstos con los docentes y las del equipo entre sí, las estrategias de enseñanza-aprendizaje a utilizar, así como el propio sistema de evaluación.</p>
                    <p>La organización espacial y temporal será evaluada al formar parte de la programación. Se evaluará su distribución y su organización. La evaluación de estos aspectos será sistemática y planificada, teniendo en cuenta estos aspectos:</p>
                    <ul class="evaluation-aspects-list">
                        <li>Establecer unos criterios o indicadores de evaluación.</li>
                        <li>Diseñar algún instrumento sencillo y funcional que permita recoger los datos más relevantes.</li>
                        <li>Establecer algunos momentos específicos dedicados a la evaluación.</li>
                    </ul>

                    <h3>7.1.- Criterios para la evaluación de los espacios</h3>
                    <p>La evaluación del espacio educativo supone un análisis y reflexión de la situación de cada escuela y de cada aula en concreto. Así, destacamos los siguientes criterios:</p>
                    <ul class="evaluation-criteria-list">
                        <li>Si los espacios creados en el centro y en el aula satisfacen las necesidades e intereses de los niños/as.</li>
                        <li>Si el espacio del aula es lo suficientemente abierto que permite conocer si están claros los caminos de acceso a los materiales.</li>
                        <li>Si hay espacios para las reuniones con las familias.</li>
                        <li>Si hay espacios para el trabajo con el equipo educativo.</li>
                        <li>Si los espacios de "paso" han sido bien aprovechados.</li>
                        <li>Si se molestan los niños/as cuando van a las distintas áreas de trabajo.</li>
                        <li>Si hay áreas ruidosas junto a las tranquilas.</li>
                        <li>Si la clase es bonita y hace que los niños/as se sientan a gusto y seguros en ella.</li>
                    </ul>

                    <h3>7.2.- Criterios para la evaluación del tiempo</h3>
                    <p>Una vez planificado y puesto en práctica un horario, debemos evaluar los siguientes criterios:</p>
                    <ul class="evaluation-criteria-list">
                        <li>Si se satisfacen las necesidades de los niños/as.</li>
                        <li>Si los tiempos son flexibles y atendiendo a la globalidad.</li>
                        <li>Si los tiempos están coordinados con el resto de los horarios del centro.</li>
                        <li>Si todos los tiempos estén cubiertos: comunicación, exploración, juego, socialización, autonomía, manipulación, experimentación, etc.</li>
                        <li>Si se dedican tiempos para la relación con las familias y para la coordinación entre el equipo docente.</li>
                        <li>Si se alternan actividades en gran grupo, con otras en pequeño grupo e individuales.</li>
                        <li>Si se dedica tiempo de relación entre el grupo clase y otros grupos de niños y tutores.</li>
                        <li>Si se potencian los hábitos de autonomía.</li>
                        <li>Si se utiliza el juego como metodología principal.</li>
                        <li>Si aprenden a respetar su turno de palabra, escuchando lo que dicen otros.</li>
                        <li>Si se evita el cansancio y aburrimiento mediante actividades cortas y variadas.</li>
                    </ul>
                     <p>Los instrumentos para realizar la evaluación tanto de los espacios como del tiempo serán la <span class="highlight">observación sistemática</span> realizada por el docente y la valoración del Equipo de ciclo coordinado por el ETCP.</p>
                </div>
                 <div class="page-break">Página 7</div>

                 <div class="section-container">
                    <h3>7.3.- La importancia de la formación del profesorado</h3>
                    <p>La organización de espacios y tiempos en los centros educativos requiere cambios y actualizaciones en las prácticas pedagógicas. Por ello, todo docente debe estar en <strong>continua formación</strong>, hecho que contempla el artículo 102 (formación permanente) de la <span class="reference">LOMLOE</span> y en el artículo 18 del Decreto 100/2023, de 9 de mayo (<span class="reference">JJ.AA. 2023</span>). Ejemplo de este tipo de actividades lo vemos en los grupos de trabajo que orientan los asesores/as de los distintos CEPs y que desarrollan los docentes de infantil en sus horas de permanencia en el centro o en las jornadas provinciales que se convocan para la formación de dicha temática.</p>

                    <h2><i class="fas fa-flag-checkered"></i>8.- CONCLUSIÓN</h2>
                    <p>Las condiciones espacio-temporales tienen una importancia <span class="highlight">vital</span> para optimizar el proceso de enseñanza y aprendizaje, pues dependiendo de su selección y utilización se van a ver modificados los materiales que utilizaremos, los objetivos que nos propongamos, etc.</p>
                    <p>Porque cada lugar ocupado y organizado es una presentación de nuestra forma de concebir la tarea educativa y todo lo que le rodea, por lo que debemos organizar una correcta organización del ambiente de nuestra aula de infantil.</p>
                     <div class="important-note">
                         <i class="fas fa-lightbulb"></i>
                         <p>No existe una organización espacio-temporal modélica o ideal, cada docente buscará la más adecuada para las características de su grupo y para sus condiciones materiales concretas.</p>
                    </div>

                    <h2><i class="fas fa-book"></i>9.- BIBLIOGRAFÍA</h2>
                    <h4 class="!mt-2 !mb-1">Manuales:</h4>
                    <ul class="list-none ml-0 space-y-1 bibliography-list">
                        <li class="bibliography-item">GALLEGO, J.L. (2009): Educación Infantil. Málaga: Aljibe.</li>
                        <li class="bibliography-item">IBAÑEZ, C. (2010): El proyecto de Educación Infantil y su práctica en el aula. Madrid: La Muralla.</li>
                        <li class="bibliography-item">TAVERNIER, R. (1991): La enseñanza entre los 2 y los 4 años. Barcelona: Martinez Roca.</li>
                        <li class="bibliography-item">TRUEBA, B. (2012): Talleres integrales en Educación Infantil. Madrid: De la Torre.</li>
                        <li class="bibliography-item">ZABALZA, M. (2002): Didáctica de la Educación Infantil. Madrid: Narcea.</li>
                    </ul>
                    <h4 class="!mt-4 !mb-1">Legislación:</h4>
                    <ul class="list-none ml-0 space-y-1 legislation-list">
                        <li class="bibliography-item">Ley Orgánica 3/2020, de 29 de diciembre, por la que se modifica la Ley Orgánica 2/2006, de 3 de mayo, de Educación (en adelante LOMLOE).</li>
                        <li class="bibliography-item">Real Decreto 132/2010, de 12 de febrero, por el que se establecen los requisitos mínimos de los centros que imparten las enseñanzas del segundo ciclo de educación infantil, la educación primaria y la educación secundaria.</li>
                        <li class="bibliography-item">(JJ.AA. 2023) Decreto 100/2023, de 9 de mayo, por el que se establece la ordenación y el currículo de la etapa de Educación Infantil en la Comunidad Autónoma de Andalucía.</li>
                        <li class="bibliography-item">(JJ.AA. 2009) Decreto 301/2009, de 14 de julio, por el que se regula el calendario y la jornada escolar en los centros docentes, a excepción de los universitarios.</li>
                        <li class="bibliography-item">(JJ.AA. 2023) Orden del 30 de mayo de 2023, por la que se desarrolla el currículo de Educación Infantil en Andalucía, la atención a la diversidad y a las diferencias individuales, la evaluación del alumnado y los procesos de tránsito entre ciclos y con Educación Primaria.</li>
                    </ul>
                </div>
                <div class="page-break">Página 8</div>
                </section>

            <section id="preguntas" class="content-section">
                 <div class="section-container">
                     <h2 class="!mt-0"><i class="fas fa-question-circle"></i>Preguntas Interactivas</h2>
                     <p class="mb-6 text-lg">Pon a prueba tus conocimientos sobre la organización del espacio y el tiempo en Educación Infantil.</p>

                     <form id="quiz-form">
                         </form>

                     <div id="quiz-results" class="hidden"> <h3><i class="fas fa-trophy mr-2"></i>Resultados del Cuestionario</h3>
                         <p id="score-text">Tu puntuación es: <span>0 / 0</span></p>
                         <p id="feedback-text" class="mt-2 text-lg font-medium"></p>
                         <button type="button" onclick="resetQuiz()" class="quiz-button mt-4">
                             <i class="fas fa-redo-alt mr-2"></i>Intentar de Nuevo
                         </button>
                     </div>

                     <button type="button" id="submit-quiz" class="quiz-button" onclick="submitQuiz()">
                         <i class="fas fa-check-circle mr-2"></i>Comprobar Respuestas
                     </button>
                 </div>
            </section>

        </main>

    </div>

    <script>
        // --- Navigation Logic ---
        const sections = document.querySelectorAll('.content-section');
        const navButtons = document.querySelectorAll('.nav-button');

        function showSection(sectionId) {
            // Hide all sections
            sections.forEach(section => {
                section.classList.remove('active');
            });
            // Deactivate all nav buttons
            navButtons.forEach(button => {
                button.classList.remove('active', 'scale-105', 'shadow-xl');
            });

            // Show the target section
            const targetSection = document.getElementById(sectionId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
            // Activate the target nav button
            const targetButton = document.getElementById(`nav-${sectionId}`);
            if (targetButton) {
                targetButton.classList.add('active', 'scale-105', 'shadow-xl');
            }
             // Scroll to top when changing sections for better UX
             window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // --- Quiz Logic ---
        const quizForm = document.getElementById('quiz-form');
        const resultsDiv = document.getElementById('quiz-results');
        const scoreText = document.getElementById('score-text');
        const feedbackText = document.getElementById('feedback-text');
        const submitButton = document.getElementById('submit-quiz');

        // --- Expanded Quiz Questions (25 Questions) ---
        const quizQuestions = [
            // Section 1 & 2: Intro & Curriculum
            {
                question: "¿Cuál es la finalidad principal de la Educación Infantil según la LOMLOE mencionada en el texto?",
                options: [
                    "Preparación exclusiva para la Educación Primaria.",
                    "Desarrollo de habilidades memorísticas.",
                    "La educación integral del alumnado.",
                    "Enseñanza de materias básicas únicamente."
                ],
                correctAnswer: "La educación integral del alumnado."
            },
            {
                question: "Según la Orden de 30 de mayo de 2023 (JJAA. 2023), ¿en torno a qué debe organizarse la vida escolar?",
                options: [
                    "Actividades espontáneas sin planificación.",
                    "Rutinas estables.",
                    "Las preferencias individuales de cada docente.",
                    "Un horario rígido e inalterable."
                ],
                correctAnswer: "Rutinas estables."
            },
            // Section 3: Space Organization
            {
                question: "¿Qué autor se cita en relación a la planificación cooperativa del espacio del centro?",
                options: ["Gallego (2009)", "Zabalza (2002)", "Tavernier (1991)", "Trueba (2012)"],
                correctAnswer: "Tavernier (1991)"
            },
            {
                question: "¿Qué significa la 'flexibilidad' como condición pedagógica de un edificio escolar?",
                options: [
                    "Que el edificio pueda admitir cambios estructurales.",
                    "Que los espacios sean convertibles y moldeables.",
                    "Que haya buena comunicación entre espacios.",
                    "Que tenga muchas ventanas."
                ],
                correctAnswer: "Que los espacios sean convertibles y moldeables."
            },
             {
                question: "Según el RD 132/2010, ¿cuál es la ratio máxima de alumnos por aula en Ed. Infantil?",
                options: ["20 alumnos/as", "30 alumnos/as", "25 alumnos/as", "No se especifica"],
                correctAnswer: "25 alumnos/as"
            },
             {
                question: "¿Qué son los 'rincones' en la organización del aula según Ibáñez (2010)?",
                options: [
                    "Zonas de castigo.",
                    "Espacios polivalentes que propician investigación, imaginación y manipulación.",
                    "Áreas exclusivas para el profesorado.",
                    "Almacenes de material."
                ],
                correctAnswer: "Espacios polivalentes que propician investigación, imaginación y manipulación."
            },
             {
                question: "¿Cuál de estos NO es un rincón común mencionado en el texto?",
                options: [
                    "Rincón del juego simbólico",
                    "Rincón de plástica o del arte",
                    "Rincón de descanso obligatorio",
                    "Rincón lógico-matemático"
                ],
                correctAnswer: "Rincón de descanso obligatorio"
            },
            {
                question: "¿Qué objetivo tienen los 'talleres' según Trueba (2012)?",
                options: [
                    "Fomentar el juego libre sin dirección.",
                    "Realizar actividades secuenciadas y dirigidas para conocer técnicas y recursos.",
                    "Evaluar los conocimientos previos de los alumnos.",
                    "Decorar el aula de forma colaborativa."
                ],
                correctAnswer: "Realizar actividades secuenciadas y dirigidas para conocer técnicas y recursos."
            },
             {
                question: "¿Qué condición NO se menciona como deseable para los espacios exteriores (patio)?",
                options: [
                    "Suelo exclusivamente de cemento.",
                    "Espacio amplio.",
                    "Acceso directo desde las aulas.",
                    "Zonas de sol y sombra."
                ],
                correctAnswer: "Suelo exclusivamente de cemento." // El texto menciona "suelo variado"
            },
            // Section 4: Time Organization
            {
                question: "¿Qué normativa regula el calendario y la jornada escolar en Andalucía (según el texto)?",
                options: ["LOMLOE", "Decreto 100/2023", "Decreto 301/2009", "Real Decreto 132/2010"],
                correctAnswer: "Decreto 301/2009"
            },
            {
                question: "¿Qué aspecto es fundamental al organizar el tiempo en el aula según la Orden de 2008/2023?",
                options: [
                    "Seguir estrictamente el libro de texto.",
                    "Respetar los ritmos biológicos de los niños/as.",
                    "Priorizar las actividades en gran grupo.",
                    "Cumplir un horario fijo sin excepciones."
                ],
                correctAnswer: "Respetar los ritmos biológicos de los niños/as."
            },
            {
                question: "La organización del tiempo en infantil supone coordinar tres necesidades: del niño, educativas y...",
                options: ["Administrativas", "Sociales", "Económicas", "Familiares exclusivamente"],
                correctAnswer: "Sociales"
            },
            // Section 5: Criteria for Organization
            {
                question: "¿Cuál es un criterio general tanto para la organización espacial como temporal?",
                options: [
                    "Utilizar solo materiales nuevos.",
                    "Realizar únicamente actividades grupales.",
                    "Tener en cuenta la edad y necesidades de los niños/as.",
                    "Basarse exclusivamente en las preferencias del docente."
                ],
                correctAnswer: "Tener en cuenta la edad y necesidades de los niños/as."
            },
            {
                question: "Un criterio específico para la organización ESPACIAL es:",
                options: [
                    "Alternar actividades de movimiento con tranquilas.",
                    "Fomentar la autonomía poniendo materiales al alcance.",
                    "Respetar la curva de fatigabilidad.",
                    "Disponer de ritmos adecuados."
                ],
                correctAnswer: "Fomentar la autonomía poniendo materiales al alcance."
            },
            {
                question: "Un criterio específico para la organización TEMPORAL es:",
                options: [
                    "Crear un ambiente estimulante y seguro.",
                    "Cuidar la decoración y la luz.",
                    "Respetar los ritmos biológicos y la curva de fatigabilidad.",
                    "Ofrecer posibilidades de manipulación."
                ],
                correctAnswer: "Respetar los ritmos biológicos y la curva de fatigabilidad."
            },
            // Section 6: Rhythms and Routines
             {
                question: "Según Gallego (2009), los ritmos que rigen la actividad del centro pueden ser personales/biológicos, ambientales y...",
                options: ["Sociales", "Escolares", "Familiares", "Culturales"],
                correctAnswer: "Escolares"
            },
            {
                question: "¿Qué función principal cumplen las rutinas según el texto?",
                options: [
                    "Limitar la creatividad de los niños.",
                    "Ahorrar tiempo de planificación al docente.",
                    "Construir nociones temporales y crear climas seguros y estables.",
                    "Facilitar la evaluación final."
                ],
                correctAnswer: "Construir nociones temporales y crear climas seguros y estables."
            },
             {
                question: "¿Cuál de estos momentos NO forma parte de la estructura típica de rutinas diarias descrita?",
                options: [
                    "Asamblea",
                    "Recreo",
                    "Examen semanal",
                    "Higiene y desayuno"
                ],
                correctAnswer: "Examen semanal"
            },
             {
                question: "¿Por qué es importante reforzar en casa los hábitos trabajados en la escuela?",
                options: [
                    "Para evaluar a las familias.",
                    "Porque la escuela no tiene tiempo suficiente.",
                    "Debido a la importancia de la colaboración escuela-familia.",
                    "Para que los niños hagan deberes."
                ],
                correctAnswer: "Debido a la importancia de la colaboración escuela-familia."
            },
            // Section 7: Evaluation
            {
                question: "¿Cómo debe ser la evaluación en Educación Infantil según el Decreto 100/2023?",
                options: [
                    "Puntual y sumativa.",
                    "Exclusivamente cuantitativa.",
                    "Global, continua y formativa.",
                    "Realizada solo por agentes externos."
                ],
                correctAnswer: "Global, continua y formativa."
            },
             {
                question: "¿Cuál es la técnica principal de evaluación mencionada?",
                options: [
                    "Pruebas escritas.",
                    "Observación directa y sistemática.",
                    "Entrevistas con las familias.",
                    "Autoevaluación del niño/a."
                ],
                correctAnswer: "Observación directa y sistemática."
            },
             {
                question: "¿Qué se debe evaluar en relación a la organización espacial y temporal?",
                options: [
                    "Solo la decoración del aula.",
                    "La distribución y organización como parte de la programación.",
                    "Únicamente si el horario se cumple estrictamente.",
                    "La opinión subjetiva de cada niño/a."
                ],
                correctAnswer: "La distribución y organización como parte de la programación."
            },
             {
                question: "Uno de los criterios para evaluar los ESPACIOS es:",
                options: [
                    "Si se alternan actividades de gran grupo e individuales.",
                    "Si los espacios satisfacen las necesidades e intereses de los niños/as.",
                    "Si se respeta el turno de palabra.",
                    "Si los tiempos son flexibles."
                ],
                correctAnswer: "Si los espacios satisfacen las necesidades e intereses de los niños/as."
            },
             {
                question: "Uno de los criterios para evaluar el TIEMPO es:",
                options: [
                    "Si hay áreas ruidosas junto a las tranquilas.",
                    "Si el espacio del aula es abierto.",
                    "Si se evitan el cansancio y aburrimiento con actividades cortas y variadas.",
                    "Si la clase es bonita."
                ],
                correctAnswer: "Si se evitan el cansancio y aburrimiento con actividades cortas y variadas."
            },
             // Section 7.3 & 8: Teacher Training & Conclusion
             {
                question: "¿Qué normativa (mencionada en la sección 7.3) contempla la formación permanente del profesorado?",
                options: [
                    "Decreto 301/2009 y RD 132/2010",
                    "LOMLOE (Art. 102) y Decreto 100/2023 (Art. 18)",
                    "Orden de 30 de mayo de 2023",
                    "Solo la LOMLOE"
                ],
                correctAnswer: "LOMLOE (Art. 102) y Decreto 100/2023 (Art. 18)"
            }
        ];


        // Function to load questions into the form
        function loadQuiz() {
            quizForm.innerHTML = ''; // Clear previous questions
            quizQuestions.forEach((q, index) => {
                const questionDiv = document.createElement('div');
                questionDiv.classList.add('quiz-question');
                questionDiv.setAttribute('id', `question-${index}`);

                let optionsHTML = `<strong class="quiz-question-text">${index + 1}. ${q.question}</strong><div class="quiz-options space-y-2">`;
                // Shuffle options for variety
                const shuffledOptions = [...q.options].sort(() => Math.random() - 0.5);

                shuffledOptions.forEach(option => {
                    // Create a more robust unique ID based on index and option hash
                    const optionId = `q${index}_opt${hashCode(option)}`;
                     optionsHTML += `
                        <label for="${optionId}" class="block">
                            <input type="radio" id="${optionId}" name="question${index}" value="${escapeHtml(option)}" required>
                            <span>${option}</span>
                        </label>
                        <div class="feedback-message" id="feedback-${optionId}"></div>`; // Unique feedback div ID
                });
                optionsHTML += `</div>`;
                questionDiv.innerHTML = optionsHTML;
                quizForm.appendChild(questionDiv);
            });
            resultsDiv.classList.add('hidden'); // Hide results
            submitButton.disabled = false; // Enable submit button
            submitButton.classList.remove('hidden'); // Ensure submit button is visible
        }

        // Function to check answers and provide feedback
        function submitQuiz() {
            let score = 0;
            const totalQuestions = quizQuestions.length;
            let allAnswered = true;

            quizQuestions.forEach((q, index) => {
                const questionDiv = quizForm.querySelector(`#question-${index}`);
                const optionsContainer = questionDiv.querySelector(`.quiz-options`);
                const selectedOptionInput = optionsContainer.querySelector(`input[name="question${index}"]:checked`);

                 // Clear previous unanswered styling
                 questionDiv.classList.remove('unanswered');

                // Disable all options for this question after submitting
                const allOptionInputs = optionsContainer.querySelectorAll(`input[name="question${index}"]`);
                 allOptionInputs.forEach(input => input.disabled = true);


                if (!selectedOptionInput) {
                    allAnswered = false;
                    // Highlight unanswered questions
                    questionDiv.classList.add('unanswered');
                     // Re-enable options for this specific unanswered question
                     allOptionInputs.forEach(input => input.disabled = false);
                    return; // Skip feedback if not answered for this iteration, but continue checking others
                }

                const userAnswer = selectedOptionInput.value;
                const correctAnswer = q.correctAnswer;
                const labels = optionsContainer.querySelectorAll('label');

                labels.forEach(label => {
                    const input = label.querySelector('input');
                    const feedbackDivId = `feedback-${input.id}`; // Get the correct feedback div ID
                    const feedbackDiv = optionsContainer.querySelector(`#${feedbackDivId}`);

                    if(feedbackDiv) feedbackDiv.textContent = ''; // Clear previous feedback

                    // Add correct/incorrect styling
                    if (input.value === correctAnswer) {
                        label.classList.add('correct');
                        // Provide feedback only if this correct option was selected
                        if (input.checked && feedbackDiv) {
                             feedbackDiv.textContent = '¡Correcto!';
                             feedbackDiv.classList.add('correct');
                             feedbackDiv.classList.remove('incorrect');
                        }
                    } else if (input.checked) { // Only mark the selected incorrect option
                        label.classList.add('incorrect');
                         if (feedbackDiv) {
                            feedbackDiv.textContent = `Incorrecto. La respuesta correcta era: "${correctAnswer}"`;
                            feedbackDiv.classList.add('incorrect');
                            feedbackDiv.classList.remove('correct');
                        }
                    }
                });

                if (userAnswer === correctAnswer) {
                    score++;
                }
            });

             if (!allAnswered) {
                 alert("Por favor, responde todas las preguntas antes de comprobar.");
                 // Don't proceed to show results if not all questions are answered
                 return;
             }

            // Display results
            scoreText.innerHTML = `Tu puntuación es: <span class="font-black text-purple-700">${score} / ${totalQuestions}</span>`;

            // Provide overall feedback message
            let feedbackMsg = "";
            const percentage = (score / totalQuestions) * 100;
            if (percentage === 100) {
                feedbackMsg = "¡Excelente! ¡Has acertado todas las preguntas! <i class='fas fa-star text-yellow-400'></i>";
            } else if (percentage >= 75) {
                feedbackMsg = "¡Muy bien! Tienes un buen conocimiento del tema. <i class='fas fa-thumbs-up text-blue-500'></i>";
            } else if (percentage >= 50) {
                feedbackMsg = "¡Bien hecho! Repasa las respuestas incorrectas para mejorar. <i class='fas fa-book-reader text-green-500'></i>";
            } else {
                feedbackMsg = "Sigue estudiando. Revisa el contenido del tema y vuelve a intentarlo. <i class='fas fa-graduation-cap text-orange-500'></i>";
            }
            feedbackText.innerHTML = feedbackMsg;


            resultsDiv.classList.remove('hidden');
            submitButton.disabled = true; // Disable after submitting
            submitButton.classList.add('hidden'); // Hide submit button after checking

             // Scroll to results
             resultsDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }

        // Function to reset the quiz
        function resetQuiz() {
             quizForm.reset(); // Reset form inputs
             resultsDiv.classList.add('hidden'); // Hide results
             submitButton.disabled = false; // Enable submit button
             submitButton.classList.remove('hidden'); // Show submit button

             // Remove feedback styling and text, re-enable inputs
             quizQuestions.forEach((q, index) => {
                 const questionDiv = quizForm.querySelector(`#question-${index}`);
                 questionDiv.classList.remove('unanswered'); // Remove warning border
                 const optionsContainer = questionDiv.querySelector('.quiz-options');
                 const labels = optionsContainer.querySelectorAll('label');
                 labels.forEach(label => {
                     label.classList.remove('correct', 'incorrect');
                     const input = label.querySelector('input');
                     input.disabled = false; // Re-enable options
                     const feedbackDivId = `feedback-${input.id}`;
                     const feedbackDiv = optionsContainer.querySelector(`#${feedbackDivId}`);
                     if(feedbackDiv) feedbackDiv.textContent = ''; // Clear feedback text
                 });
             });

             // Optionally reload questions to shuffle options again
             // loadQuiz(); // Uncomment this if you want options shuffled on reset

             // Scroll to the top of the quiz
             const quizSection = document.getElementById('preguntas');
             quizSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }

        // --- Utility Functions ---
        function escapeHtml(unsafe) {
            if (typeof unsafe !== 'string') return unsafe;
            return unsafe
                 .replace(/&/g, "&amp;")
                 .replace(/</g, "&lt;")
                 .replace(/>/g, "&gt;")
                 .replace(/"/g, "&quot;")
                 .replace(/'/g, "&#039;");
        }

         // Simple hash function for creating unique IDs from strings
         function hashCode(str) {
            let hash = 0;
            if (str.length === 0) return hash;
            for (let i = 0; i < str.length; i++) {
                const char = str.charCodeAt(i);
                hash = ((hash << 5) - hash) + char;
                hash |= 0; // Convert to 32bit integer
            }
            // Ensure the hash is non-negative for use in IDs
            return Math.abs(hash);
        }


        // Initial load
        document.addEventListener('DOMContentLoaded', () => {
            showSection('tema'); // Show 'Tema' section by default
            loadQuiz(); // Load quiz questions when the page loads
        });

    </script>

</body>
</html>

