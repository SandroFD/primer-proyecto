// Datos de prueba para testimonios
window.TESTIMONIOS = [
  { name:"Valeria Torres", age:26, date:"2025-10-06", text:"Con NutriTrack aprendí a planificar mis comidas sin estresarme. Ahora controlo mejor las porciones y me siento con más energía." },
  { name:"Diego Huamán", age:31, date:"2025-09-28", text:"El registro diario es simple y los recordatorios me ayudaron a ser constante. Bajé 3 kg en 6 semanas." },
  { name:"Camila Rojas", age:24, date:"2025-09-14", text:"Me encantan los reportes semanales; ver el progreso me motivó a seguir." },
  { name:"Luis Gutiérrez", age:35, date:"2025-08-30", text:"Personalicé mis metas y logré ordenar mis horarios de comida. Se siente sostenible." },
  { name:"Ana Castillo", age:29, date:"2025-08-12", text:"Entendí mis porciones y dejé el picoteo. El diseño es claro y rápido." },
  { name:"José Ignacio Salazar", age:38, date:"2025-07-27", text:"Los reportes descargables me sirvieron para conversar con mi nutricionista." },
  { name:"María Fernanda López", age:33, date:"2025-07-09", text:"El registro es tan rápido que no lo abandono. He mejorado mi hidratación y fibra." },
  { name:"Carlos Méndez", age:34, date:"2025-06-21", text:"El registro diario es rapidísimo y los reportes me ayudaron a ajustar mis metas sin estrés." },
  { name:"Sofía Alarcón", age:22, date:"2025-06-05", text:"Recién empiezo y ya noto cambios en mi energía. Me gustó el enfoque educativo." },
  { name:"Ricardo Ponce", age:41, date:"2025-05-18", text:"Puedo ver tendencias y corregir a tiempo. La app no abruma." },
  { name:"Gabriela Chávez", age:28, date:"2025-05-03", text:"Las metas pequeñas semanales marcaron la diferencia. ¡Súper útil!" },
  { name:"Pepito Robles", age:30, date:"2025-04-15", text:"Me ayudó a ser constante. El proceso es sencillo y la interfaz agradable." }
];

// Base de datos de alimentos simulada para poblar el catálogo
const BASE_DATOS_ALIMENTOS = [
  { nombre: "Manzana (unidad)", calorias: 52, categoria: "Frutas" },
  { nombre: "Plátano (unidad)", calorias: 89, categoria: "Frutas" },
  { nombre: "Huevo cocido (unidad)", calorias: 155, categoria: "Proteínas" },
  { nombre: "Pechuga de pollo (100g)", calorias: 165, categoria: "Proteínas" },
  { nombre: "Arroz blanco cocido (100g)", calorias: 130, categoria: "Carbohidratos" },
  { nombre: "Pan integral (rebanada)", calorias: 69, categoria: "Carbohidratos" },
  { nombre: "Leche entera (200ml)", calorias: 120, categoria: "Lácteos" },
  { nombre: "Yogurt natural (125g)", calorias: 60, categoria: "Lácteos" },
  { nombre: "Avena cocida (100g)", calorias: 70, categoria: "Carbohidratos" },
  { nombre: "Aguacate (mitad)", calorias: 160, categoria: "Frutas" },
  { nombre: "Almendras (30g)", calorias: 170, categoria: "Otros" },
  { nombre: "Atún en agua (lata)", calorias: 120, categoria: "Proteínas" },
  { nombre: "Brócoli cocido (100g)", calorias: 35, categoria: "Verduras" },
  { nombre: "Zanahoria cruda (unidad)", calorias: 30, categoria: "Verduras" },
  { nombre: "Queso fresco (50g)", calorias: 150, categoria: "Lácteos" },
  { nombre: "Lentejas cocidas (100g)", calorias: 116, categoria: "Carbohidratos" },
  { nombre: "Pasta cocida (100g)", calorias: 131, categoria: "Carbohidratos" },
  { nombre: "Aceite de oliva (cucharada)", calorias: 119, categoria: "Otros" },
  { nombre: "Chocolate negro (20g)", calorias: 110, categoria: "Otros" },
  { nombre: "Naranja (unidad)", calorias: 47, categoria: "Frutas" },
  { nombre: "Pera (unidad)", calorias: 57, categoria: "Frutas" },
  { nombre: "Uvas (100g)", calorias: 67, categoria: "Frutas" },
  { nombre: "Sandía (100g)", calorias: 30, categoria: "Frutas" },
  { nombre: "Melón (100g)", calorias: 34, categoria: "Frutas" },
  { nombre: "Piña (100g)", calorias: 50, categoria: "Frutas" },
  { nombre: "Fresa (100g)", calorias: 32, categoria: "Frutas" },
  { nombre: "Kiwi (unidad)", calorias: 61, categoria: "Frutas" },
  { nombre: "Mango (unidad)", calorias: 200, categoria: "Frutas" },
  { nombre: "Papaya (100g)", calorias: 43, categoria: "Frutas" },
  { nombre: "Limón (unidad)", calorias: 29, categoria: "Frutas" },
  { nombre: "Tomate (unidad)", calorias: 18, categoria: "Verduras" },
  { nombre: "Lechuga (100g)", calorias: 15, categoria: "Verduras" },
  { nombre: "Espinaca (100g)", calorias: 23, categoria: "Verduras" },
  { nombre: "Pepino (100g)", calorias: 16, categoria: "Verduras" },
  { nombre: "Pimiento rojo (100g)", calorias: 31, categoria: "Verduras" },
  { nombre: "Cebolla (100g)", calorias: 40, categoria: "Verduras" },
  { nombre: "Ajo (diente)", calorias: 4, categoria: "Verduras" },
  { nombre: "Papa cocida (100g)", calorias: 87, categoria: "Carbohidratos" },
  { nombre: "Camote cocido (100g)", calorias: 86, categoria: "Carbohidratos" },
  { nombre: "Maíz cocido (100g)", calorias: 86, categoria: "Carbohidratos" },
  { nombre: "Frijoles negros cocidos (100g)", calorias: 132, categoria: "Carbohidratos" },
  { nombre: "Garbanzos cocidos (100g)", calorias: 164, categoria: "Carbohidratos" },
  { nombre: "Carne de res magra (100g)", calorias: 250, categoria: "Proteínas" },
  { nombre: "Cerdo magro (100g)", calorias: 143, categoria: "Proteínas" },
  { nombre: "Pescado blanco (100g)", calorias: 90, categoria: "Proteínas" },
  { nombre: "Salmón (100g)", calorias: 208, categoria: "Proteínas" },
  { nombre: "Camarones (100g)", calorias: 99, categoria: "Proteínas" },
  { nombre: "Tofu (100g)", calorias: 76, categoria: "Proteínas" },
  { nombre: "Mantequilla de maní (cucharada)", calorias: 94, categoria: "Otros" },
  { nombre: "Miel (cucharada)", calorias: 64, categoria: "Otros" },
  { nombre: "Café solo (taza)", calorias: 2, categoria: "Otros" },
  { nombre: "Té verde (taza)", calorias: 1, categoria: "Otros" },
  { nombre: "Galletas de avena (unidad)", calorias: 65, categoria: "Carbohidratos" },
  { nombre: "Barra de granola (unidad)", calorias: 150, categoria: "Carbohidratos" }
];

// Lógica principal del Dashboard

// Manejo centralizado del estado en LocalStorage para cada usuario
// Se encarga de aislar los datos según la sesión y evitar colisiones entre cuentas
const Store = {
  // Genera una clave única por usuario para aislar los datos
  getUserKey: (key) => {
    // Estas claves son del sistema y no deben ser únicas por usuario
    const globalKeys = ['nt_usuarios', 'nt_usuario_actual'];
    if (globalKeys.includes(key)) return key;

    const usuarioJson = localStorage.getItem('nt_usuario_actual');
    if (usuarioJson) {
      try {
        const usuario = JSON.parse(usuarioJson);
        return `${key}_${usuario.email}`;
      } catch (e) { return key; }
    }
    return key;
  },
  get: (key, def) => {
    const realKey = Store.getUserKey(key);
    try {
      return JSON.parse(localStorage.getItem(realKey)) || def;
    } catch { return def; }
  },
  set: (key, val) => {
    const realKey = Store.getUserKey(key);
    localStorage.setItem(realKey, JSON.stringify(val));
  }
};

// Datos por defecto para que la aplicación funcione aun sin registro previo
const datosIniciales = {
  perfil: { 
    //nombre: "Sandro", 
    //email: "usuario@nutritrack.com",
    //edad: 27,
    //peso: 75,
    //altura: 170,
    //genero: "masculino",
    //actividad: "moderado",
    //objetivo: "mantener"
  },
  metas: [
    { id: 1, titulo: "Comer balanceado", descripcion: "Incluye proteína y vegetales en la cena.", completada: false, racha: 0 },
    { id: 2, titulo: "Ejercicio diario", descripcion: "20 min de caminata o trote.", completada: false, racha: 0 }
  ],
  alimentos: [
    { id: 1, nombre: "Manzana", calorias: 52, categoria: "Frutas" },
    { id: 2, nombre: "Pollo (100g)", calorias: 165, categoria: "Proteínas" },
    { id: 3, nombre: "Arroz (100g)", calorias: 130, categoria: "Carbohidratos" }
  ],
  registros: [
    { id: 1, fecha: "2025-11-20", comida: "Desayuno", detalle: "Avena con manzana", calorias: 350 },
    { id: 2, fecha: "2025-11-20", comida: "Almuerzo", detalle: "Pollo con arroz y ensalada", calorias: 650 },
    { id: 3, fecha: "2025-11-19", comida: "Cena", detalle: "Yogurt con frutas", calorias: 200 }
  ]
};

// API Key para las integraciones con Gemini (compartida entre módulos)
// Se obtiene del objeto CONFIG definido en js/config.js para no exponer la clave real
const GEMINI_API_KEY = typeof CONFIG !== 'undefined' ? CONFIG.GEMINI_API_KEY : '';

if (!GEMINI_API_KEY) {
  console.warn('Falta la API KEY. Crea js/config.js basado en js/config.example.js');
}

// Cargar datos guardados
const estado = {
  perfil: Store.get("nt_perfil", datosIniciales.perfil),
  metas: Store.get("nt_metas", datosIniciales.metas),
  alimentos: Store.get("nt_alimentos", datosIniciales.alimentos),
  registros: Store.get("nt_registros", datosIniciales.registros)
};

// --- MÓDULO DE AUTENTICACIÓN ---
// Maneja el registro, inicio de sesión y control de acceso de usuarios
const Auth = {
  // Obtiene la lista de usuarios desde LocalStorage
  getUsers: () => Store.get('nt_usuarios', []),

  // Valida el formato del email usando Regex
  validarEmail: (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  },

  // Verifica si un correo ya está registrado
  existeEmail: (email) => {
    const usuarios = Auth.getUsers();
    return usuarios.some(u => u.email === email);
  },

  // Registra un nuevo usuario en el sistema
  registrar: (nombre, email, password) => {
    if (!Auth.validarEmail(email)) {
      alert('Por favor, ingresa un correo electrónico válido.');
      return false;
    }
    if (Auth.existeEmail(email)) {
      alert('El correo ya está registrado.');
      return false;
    }
    const nuevoUsuario = { nombre, email, password, id: Date.now() };
    const usuarios = Auth.getUsers();
    usuarios.push(nuevoUsuario);
    Store.set('nt_usuarios', usuarios);
    
    // Inicia sesión automáticamente tras el registro
    Auth.guardarSesion(nuevoUsuario);
    return true;
  },

  // Valida las credenciales del usuario para iniciar sesión
  login: (email, password) => {
    const usuarios = Auth.getUsers();
    const usuario = usuarios.find(u => u.email === email && u.password === password);
    
    if (usuario) {
      Auth.guardarSesion(usuario);
      return true;
    }
    return false;
  },

  // Guarda la sesión del usuario actual en LocalStorage
  guardarSesion: (usuario) => {
    localStorage.setItem('nt_usuario_actual', JSON.stringify(usuario));
    // Actualiza el estado global si está disponible
    if (typeof estado !== 'undefined' && estado.perfil) {
        estado.perfil.nombre = usuario.nombre;
        estado.perfil.email = usuario.email;
    }
  },

  // Verifica si hay una sesión activa y protege rutas privadas
  verificarSesion: () => {
    const usuario = JSON.parse(localStorage.getItem('nt_usuario_actual'));
    const paginasPublicas = ['acerca.html', 'testimonios.html', 'contacto.html', 'privacidad.html', 'terminos.html'];
    const esPaginaPublica = paginasPublicas.some(p => window.location.href.includes(p));

    // Si estamos en una página interna (pages/) y no es pública, requerimos login
    if (!usuario && window.location.href.includes('/pages/') && !esPaginaPublica) {
      window.location.href = '../index.html';
    }

    // Si hay usuario, actualizamos el estado global para que se vea su nombre
    if (usuario && typeof estado !== 'undefined' && estado.perfil) {
      estado.perfil.nombre = usuario.nombre;
      estado.perfil.email = usuario.email;
    }

    return usuario;
  },

  // Cierra la sesión y redirige al inicio
  logout: () => {
    localStorage.removeItem('nt_usuario_actual');
    window.location.href = '../index.html';
  }
};

// Función auxiliar para validar campos de texto
const validarCampo = (valor, minLength = 1) => {
  return valor && valor.trim().length >= minLength;
};

// Fórmula de Mifflin-St Jeor para calcular TMB y Calorías
const calcularCalorias = (peso, altura, edad, genero, actividad, objetivo) => {
  // 1. Tasa Metabólica Basal (TMB)
  let tmb = (10 * peso) + (6.25 * altura) - (5 * edad);
  if (genero === 'masculino') tmb += 5;
  else tmb -= 161;

  // 2. Factor de Actividad
  const factores = {
    'sedentario': 1.2,
    'ligero': 1.375,
    'moderado': 1.55,
    'activo': 1.725,
    'muy_activo': 1.9
  };
  const tdee = tmb * (factores[actividad] || 1.2);

  // 3. Ajuste por Objetivo
  let meta = tdee;
  if (objetivo === 'perder_peso') meta -= 500; // Déficit
  else if (objetivo === 'ganar_musculo') meta += 300; // Superávit

  return Math.round(meta);
};

// Inicialización de la página
document.addEventListener('DOMContentLoaded', () => {

  // Verificar sesión al cargar
  Auth.verificarSesion();

  // --- LÓGICA DE ONBOARDING (Configuración Inicial) ---
  const modalOnboarding = document.getElementById('modal-onboarding');
  const formOnboarding = document.getElementById('form-onboarding');

  // Si estamos en el Dashboard y faltan datos clave (ej: peso), mostramos el modal
  if (modalOnboarding && (!estado.perfil.peso || !estado.perfil.altura)) {
    // Pequeño delay para que cargue la UI de fondo primero
    setTimeout(() => {
      modalOnboarding.hidden = false;
      modalOnboarding.classList.add('is-open');
      document.body.classList.add('modal-is-open');
    }, 500);
  }

  if (formOnboarding) {
    formOnboarding.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Obtener datos
      const edad = parseInt(document.getElementById('ob-edad').value);
      const peso = parseFloat(document.getElementById('ob-peso').value);
      const altura = parseInt(document.getElementById('ob-altura').value);
      const genero = document.getElementById('ob-genero').value;
      const actividad = document.getElementById('ob-actividad').value;
      const objetivo = document.getElementById('ob-objetivo').value;

      // Calcular Meta
      const metaCalorias = calcularCalorias(peso, altura, edad, genero, actividad, objetivo);

      // Guardar en Estado
      estado.perfil = {
        ...estado.perfil,
        edad, peso, altura, genero, actividad, objetivo,
        metaCalorias // Guardamos la meta calculada
      };
      Store.set("nt_perfil", estado.perfil);

      // Cerrar Modal
      modalOnboarding.classList.remove('is-open');
      setTimeout(() => { modalOnboarding.hidden = true; }, 300);
      document.body.classList.remove('modal-is-open');

      // Feedback y Actualización
      alert(`¡Configuración lista!\nTu meta diaria calculada es de: ${metaCalorias} kcal.`);
      
      // Recargar gráficos si existen
      const elGrafico = document.getElementById('grafico-barras');
      if (elGrafico) renderizarProgreso(elGrafico);
      
      // Actualizar textos del perfil si están visibles
      const elNombre = document.getElementById('dash-nombre');
      if (elNombre) elNombre.textContent = estado.perfil.nombre;
    });
  }
  // --- FIN ONBOARDING ---

  // Menú móvil
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      // Alternar visibilidad del menú
      navMenu.classList.toggle('is-open');

      // Accesibilidad
      const isExpanded = navMenu.classList.contains('is-open');
      navToggle.setAttribute('aria-expanded', isExpanded);
    });
  }

  // Control de modales
  const openModalButtons = document.querySelectorAll('[data-modal-open]');
  const closeModalButtons = document.querySelectorAll('[data-modal-close]');
  const switchModalButtons = document.querySelectorAll('[data-modal-switch]');

  // Abrir modal
  const openModal = (modal) => {
    if (modal) {
      modal.hidden = false;
      // Necesario para la animación
      modal.offsetWidth; 
      modal.classList.add('is-open');
      document.body.classList.add('modal-is-open');
    }
  };

  // Cerrar modal
  const closeModal = (modal) => {
    if (modal) {
      modal.classList.remove('is-open');
      // Esperar animación antes de ocultar
      modal.addEventListener('transitionend', () => {
        modal.hidden = true;
      }, { once: true });
      document.body.classList.remove('modal-is-open');
    }
  };

  // Eventos para abrir modales
  openModalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      const modalId = button.dataset.modalOpen;
      const modal = document.getElementById(modalId);
      openModal(modal);
    });
  });

  // Eventos para cerrar modales
  closeModalButtons.forEach(button => {
    button.addEventListener('click', () => {
      const modal = button.closest('.Modal');
      closeModal(modal);
    });
  });

  switchModalButtons.forEach(button => {
    button.addEventListener('click', (event) => {
      event.preventDefault();
      
      // Cierra el actual
      const currentModal = button.closest('.Modal');
      closeModal(currentModal);

      // Abre el siguiente con un pequeño retraso
      const targetId = button.dataset.modalSwitch;
      const targetModal = document.getElementById(targetId);
      
      if (targetModal) {
        setTimeout(() => {
          openModal(targetModal);
        }, 200); // Pequeña espera para la transición de cierre
      }
    });
  });

  // Cerrar al hacer clic fuera
  document.querySelectorAll('.Modal').forEach(modal => {
    modal.addEventListener('click', (event) => {
      if (event.target === modal) {
        closeModal(modal);
      }
    });
  });

// Login
  const loginForm = document.querySelector('#login .Modal-form');

  if (loginForm) {
    loginForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita que la página se recargue
      
      // Obtener valores de los inputs
      const inputs = loginForm.querySelectorAll('input');
      const email = inputs[0].value.trim();
      const password = inputs[1].value.trim();

      // Intentar iniciar sesión
      if (Auth.login(email, password)) {
        window.location.href = 'pages/dashboard.html';
      } else {
        alert('Correo o contraseña incorrectos.');
      }
    });
  }

  // Registro
  const registerForm = document.querySelector('#register .Modal-form');

  if (registerForm) {
    registerForm.addEventListener('submit', (event) => {
      event.preventDefault(); // Evita que la página se recargue
      
      // Obtener valores del formulario
      const inputs = registerForm.querySelectorAll('input');
      // Asumiendo orden: nombre, email, password, confirm
      const nombre = inputs[0].value.trim();
      const email = inputs[1].value.trim();
      const password = inputs[2].value.trim();
      const confirmPass = inputs[3].value.trim();

      // Validaciones básicas antes de enviar
      if (!validarCampo(nombre)) return alert('El nombre es obligatorio');
      if (!validarCampo(password, 6)) return alert('La contraseña debe tener al menos 6 caracteres');
      if (password !== confirmPass) return alert('Las contraseñas no coinciden');

      // Intentar registrar usuario
      if (Auth.registrar(nombre, email, password)) {
        alert('¡Cuenta creada con éxito!');
        window.location.href = 'pages/dashboard.html';
      }
    });
  }
});



// 2. Renderizado del Dashboard y Páginas
document.addEventListener("DOMContentLoaded", () => {
  
  // Mostrar nombre del usuario
  const elNombre = document.getElementById('dash-nombre');
  if (elNombre && estado.perfil.nombre) {
    elNombre.textContent = estado.perfil.nombre;
  }

  // Cargar resumen de metas
  const elMetasDash = document.getElementById('dash-metas-container');
  if (elMetasDash) {
    renderizarMetasDashboard(elMetasDash);
  }

  // Cargar resumen de calorías (Dashboard)
  const elResumenCalorias = document.getElementById('dash-resumen-calorias');
  if (elResumenCalorias) {
    renderizarResumenCalorias(elResumenCalorias);
  }

  // Página de Metas
  const elListaMetas = document.getElementById('lista-metas');
  const elFormMeta = document.getElementById('form-meta');
  
  // NUEVOS ELEMENTOS (Objetivos Cuantitativos)
  const elMetaCaloriasDisplay = document.getElementById('meta-calorias-display');
  const elFormPeso = document.getElementById('form-actualizar-peso');
  const elPesoInput = document.getElementById('meta-peso-input');

  if (elListaMetas) {
    renderizarListaMetas(elListaMetas);
    
    // Eventos: Eliminar, Completar y Editar
    elListaMetas.addEventListener('click', (e) => {
      const btnDelete = e.target.closest('.btn-delete');
      const btnComplete = e.target.closest('.btn-complete');
      const btnEdit = e.target.closest('.btn-edit');

      if (btnDelete) {
        const id = parseInt(btnDelete.dataset.id);
        if(confirm("¿Eliminar este hábito?")) {
          eliminarMeta(id);
          renderizarListaMetas(elListaMetas);
        }
      }

      if (btnComplete) {
        const id = parseInt(btnComplete.dataset.id);
        completarMeta(id);
        renderizarListaMetas(elListaMetas);
      }

      if (btnEdit) {
        const id = parseInt(btnEdit.dataset.id);
        editarMeta(id);
      }
    });
  }

  // Lógica para la sección de Objetivos Cuantitativos
  if (elMetaCaloriasDisplay && elPesoInput) {
      // 1. Cargar valores iniciales
      elMetaCaloriasDisplay.textContent = estado.perfil.metaCalorias || 0;
      elPesoInput.value = estado.perfil.peso || '';

      // 2. Manejar actualización de peso
      if (elFormPeso) {
          elFormPeso.addEventListener('submit', (e) => {
              e.preventDefault();
              const nuevoPeso = parseFloat(elPesoInput.value);
              
              if (nuevoPeso > 0) {
                  // Actualizar peso en perfil
                  estado.perfil.peso = nuevoPeso;
                  
                  // Recalcular calorías
                  const p = estado.perfil;
                  // Aseguramos que existan los otros datos necesarios
                  if (p.altura && p.edad && p.genero && p.actividad) {
                    const nuevaMeta = calcularCalorias(nuevoPeso, p.altura, p.edad, p.genero, p.actividad, p.objetivo);
                    
                    estado.perfil.metaCalorias = nuevaMeta;
                    Store.set("nt_perfil", estado.perfil);

                    // Actualizar UI
                    elMetaCaloriasDisplay.textContent = nuevaMeta;
                    alert(`Peso actualizado a ${nuevoPeso}kg.\nTu nueva meta diaria es: ${nuevaMeta} kcal.`);
                  } else {
                    alert("Faltan datos en tu perfil para recalcular. Por favor ve a Configuración.");
                  }
              }
          });
      }
  }

  if (elFormMeta) {
    elFormMeta.addEventListener('submit', (e) => {
      e.preventDefault();
      const titulo = document.getElementById('meta-titulo').value;
      const desc = document.getElementById('meta-desc').value;
      
      if (metaEditandoId) {
        guardarEdicionMeta(titulo, desc);
        // Restaurar botón
        const btnSubmit = elFormMeta.querySelector('button[type="submit"]');
        if (btnSubmit) btnSubmit.textContent = "Agregar Hábito";
      } else {
        agregarMeta(titulo, desc);
      }
      
      // Limpiar formulario y recargar lista
      elFormMeta.reset();
      if (elListaMetas) renderizarListaMetas(elListaMetas);
    });
  }

  // Página de Alimentos
  const elListaAlimentos = document.getElementById('lista-alimentos');
  const elFormAlimento = document.getElementById('form-alimento');
  const elBuscador = document.getElementById('buscador-alimento');
  const btnBuscar = document.getElementById('btn-buscar');
  const elResultados = document.getElementById('resultados-busqueda');
  const btnToggleManual = document.getElementById('btn-toggle-manual');
  const elFiltroCategoria = document.getElementById('filtro-categoria');

  if (elListaAlimentos) {
    renderizarCatalogoAlimentos(elListaAlimentos);

    // Evento de filtro
    if (elFiltroCategoria) {
      elFiltroCategoria.addEventListener('change', (e) => {
        renderizarCatalogoAlimentos(elListaAlimentos, e.target.value);
      });
    }

    // Eventos en el catálogo (Eliminar y Registrar)
    elListaAlimentos.addEventListener('click', (e) => {
      const btnDelete = e.target.closest('.btn-delete-food');
      const btnRegister = e.target.closest('.btn-register-food');

      if (btnDelete) {
        const id = parseInt(btnDelete.dataset.id);
        eliminarAlimento(id);
        const filtroActual = elFiltroCategoria ? elFiltroCategoria.value : 'todos';
        renderizarCatalogoAlimentos(elListaAlimentos, filtroActual);
      }

      if (btnRegister) {
        const id = parseInt(btnRegister.dataset.id);
        const alimento = estado.alimentos.find(a => a.id === id);
        if (alimento) {
          // Preguntar tipo de comida
          const comida = prompt(`Registrar "${alimento.nombre}" (${alimento.calorias} kcal).\n¿Para qué comida? (Desayuno, Almuerzo, Cena, Snack)`, "Snack");
          if (comida) {
            // Fecha de hoy
            const hoy = new Date();
            const fechaLocal = new Date(hoy.getTime() - (hoy.getTimezoneOffset() * 60000))
                                .toISOString()
                                .split('T')[0];
            agregarRegistro(fechaLocal, comida, alimento.nombre, alimento.calorias);
            alert("¡Alimento registrado en tu consumo diario!");
          }
        }
      }
    });
  }

  // Lógica de Búsqueda
  if (btnBuscar && elResultados) {
    btnBuscar.addEventListener('click', () => {
      const query = elBuscador.value.toLowerCase().trim();
      if (!query) return;

      const resultados = BASE_DATOS_ALIMENTOS.filter(item => 
        item.nombre.toLowerCase().includes(query)
      );

      elResultados.innerHTML = '';
      if (resultados.length > 0) {
        resultados.forEach((item) => {
          const div = document.createElement('div');
          div.style.cssText = "display: flex; justify-content: space-between; align-items: center; padding: 0.8rem; background: #f9f9f9; border-radius: 8px; border: 1px solid #eee;";
          div.innerHTML = `
            <div>
              <strong>${item.nombre}</strong>
              <span style="color: var(--muted); font-size: 0.9rem;"> - ${item.calorias} kcal</span>
            </div>
            <button class="btn btn--primary btn-add-search" style="font-size: 0.8rem; padding: 0.4rem 0.8rem;">Agregar</button>
          `;
          
          // Evento directo al botón
          const btn = div.querySelector('.btn-add-search');
          btn.addEventListener('click', () => {
            agregarAlimento(item.nombre, item.calorias, item.categoria);
            if (elListaAlimentos) {
               const filtroActual = document.getElementById('filtro-categoria') ? document.getElementById('filtro-categoria').value : 'todos';
               renderizarCatalogoAlimentos(elListaAlimentos, filtroActual);
            }
            alert(`"${item.nombre}" agregado a tu catálogo.`);
            div.remove(); 
          });

          elResultados.appendChild(div);
        });
      } else {
        elResultados.innerHTML = '<p style="color: var(--muted);">No se encontraron resultados.</p>';
      }
    });
    
    // Buscar al presionar Enter
    elBuscador.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') btnBuscar.click();
    });
  }

  // Toggle Manual
  if (btnToggleManual && elFormAlimento) {
    btnToggleManual.addEventListener('click', () => {
      const isHidden = elFormAlimento.style.display === 'none';
      elFormAlimento.style.display = isHidden ? 'flex' : 'none';
      btnToggleManual.textContent = isHidden ? 'Cancelar' : '¿No está? Agregar manualmente';
    });
  }

  // Formulario Manual
  if (elFormAlimento) {
    elFormAlimento.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('alimento-nombre').value;
      const calorias = document.getElementById('alimento-calorias').value;
      const categoria = document.getElementById('alimento-categoria').value;

      agregarAlimento(nombre, calorias, categoria);
      
      elFormAlimento.reset();
      elFormAlimento.style.display = 'none';
      if (btnToggleManual) btnToggleManual.textContent = '¿No está? Agregar manualmente';
      if (elListaAlimentos) {
        const filtroActual = document.getElementById('filtro-categoria') ? document.getElementById('filtro-categoria').value : 'todos';
        renderizarCatalogoAlimentos(elListaAlimentos, filtroActual);
      }
    });
  }

  // Historial de Registros
  const elListaRegistros = document.getElementById('lista-registros');
  const elFiltroHistorial = document.getElementById('filtro-historial');

  if (elListaRegistros) {
    // Renderizado inicial
    const filtroInicial = elFiltroHistorial ? elFiltroHistorial.value : '7dias';
    renderizarHistorialRegistros(elListaRegistros, filtroInicial);

    // Evento de cambio
    if (elFiltroHistorial) {
      elFiltroHistorial.addEventListener('change', (e) => {
        renderizarHistorialRegistros(elListaRegistros, e.target.value);
      });
    }
  }

  // Formulario de Registro
  const elFormRegistro = document.getElementById('form-registro-comida');
  if (elFormRegistro) {
    // Establecer fecha actual por defecto (formato YYYY-MM-DD)
    const inputFecha = document.getElementById('reg-fecha');
    if (inputFecha) {
      const hoy = new Date();
      // Ajuste para zona horaria local
      const fechaLocal = new Date(hoy.getTime() - (hoy.getTimezoneOffset() * 60000))
                          .toISOString()
                          .split('T')[0];
      inputFecha.value = fechaLocal;
    }

    // Botón de Analizar Comida (Integración con Gemini)
    const btnAnalizar = document.getElementById('btn-analizar-comida');
    const btnManual = document.getElementById('btn-habilitar-manual');
    const btnGuardar = document.getElementById('btn-guardar-registro');
    const inputImg = document.getElementById('input-imagen-comida');

    // Previsualización inmediata al seleccionar archivo
    if (inputImg) {
      inputImg.addEventListener('change', () => {
        if (inputImg.files && inputImg.files[0]) {
          const file = inputImg.files[0];
          const reader = new FileReader();
          reader.onload = function(e) {
            const preview = document.getElementById('upload-preview');
            if (preview) preview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
          }
          reader.readAsDataURL(file);
        }
      });
    }
    
    // Función para habilitar el formulario
    const habilitarFormulario = () => {
      document.getElementById('reg-tipo').disabled = false;
      document.getElementById('reg-detalle').disabled = false;
      document.getElementById('reg-calorias').disabled = false;
      if (btnGuardar) btnGuardar.disabled = false;
    };

    // Convertir archivo a Base64
    const fileToBase64 = (file) => {
      return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => {
          // Quitar el prefijo "data:image/jpeg;base64,"
          const base64String = reader.result.split(',')[1];
          resolve(base64String);
        };
        reader.onerror = (error) => reject(error);
      });
    };

    // Llamada a Gemini API
    // Esta función recibe la imagen codificada, construye el prompt y normaliza la respuesta
    // Siempre devuelve un objeto con el nombre del plato y su estimación calórica o null ante errores
    const analizarImagenConGemini = async (base64Image) => {
      if (!GEMINI_API_KEY) {
        alert("Falta configurar la API Key en js/app.js");
        return null;
      }

      // URL corregida para usar gemini-1.5-flash-latest o gemini-1.5-flash
      // A veces la versión v1beta requiere especificar el modelo exacto disponible
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;
      
      const prompt = `Actúa como un nutricionista experto. Analiza esta imagen de comida. Identifica el plato principal y estima sus calorías totales.
      Responde ÚNICAMENTE con un objeto JSON válido (sin bloques de código Markdown, ni texto introductorio). Usa esta estructura exacta:
      {
        "nombre_plato": "Nombre descriptivo del plato en español",
        "estimacion_calorias": 0
      }
      Si la imagen no contiene comida clara, responde con un JSON donde nombre_plato sea 'No detectado' y estimacion_calorias sea 0.`;

      const body = {
        contents: [{
          parts: [
            { text: prompt },
            { inline_data: { mime_type: "image/jpeg", data: base64Image } }
          ]
        }]
      };

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(body)
        });

        const data = await response.json();
        
        // Debug: Ver qué responde la API
        console.log("Respuesta Gemini:", data);

        // Parsear respuesta
        if (data.candidates && data.candidates[0].content) {
          const texto = data.candidates[0].content.parts[0].text;
          // Limpiar posibles bloques de código markdown
          const jsonTexto = texto.replace(/```json|```/g, '').trim();
          return JSON.parse(jsonTexto);
        }
        
        // Si hay error en la respuesta de la API (ej: Key inválida)
        if (data.error) {
          console.error("Error API:", data.error);
          alert(`Error de API: ${data.error.message}`);
        }
        
        return null;

      } catch (error) {
        console.error("Error al analizar imagen:", error);
        alert(`Ocurrió un error: ${error.message}`);
        return null;
      }
    };

    if (btnAnalizar) {
      btnAnalizar.addEventListener('click', async () => {
        
        if (inputImg && inputImg.files && inputImg.files[0]) {
          const file = inputImg.files[0];
          
          // Estado de carga
          btnAnalizar.textContent = "Analizando...";
          btnAnalizar.disabled = true;

          try {
            const base64 = await fileToBase64(file);
            const resultado = await analizarImagenConGemini(base64);

            if (resultado) {
              if (resultado.nombre_plato === 'No detectado') {
                alert("No pudimos identificar comida en la imagen. Por favor intenta ingresarlo manualmente.");
              } else {
                // Rellenar campos
                document.getElementById('reg-detalle').value = resultado.nombre_plato;
                document.getElementById('reg-calorias').value = resultado.estimacion_calorias;
                alert(`¡Análisis completado!\nPlato: ${resultado.nombre_plato}\nCalorías: ${resultado.estimacion_calorias}`);
              }
              habilitarFormulario();
            }
          } catch (e) {
            console.error(e);
          } finally {
            // Restaurar botón
            btnAnalizar.textContent = "Analizar comida";
            btnAnalizar.disabled = false;
          }

        } else {
          alert("Por favor, selecciona una imagen primero.");
        }
      });
    }

    // Botón para ingreso manual
    if (btnManual) {
      btnManual.addEventListener('click', () => {
        habilitarFormulario();
        document.getElementById('reg-detalle').focus();
      });
    }

    elFormRegistro.addEventListener('submit', (e) => {
      e.preventDefault();
      const fecha = document.getElementById('reg-fecha').value;
      const tipo = document.getElementById('reg-tipo').value;
      const detalle = document.getElementById('reg-detalle').value;
      const calorias = document.getElementById('reg-calorias').value;

      agregarRegistro(fecha, tipo, detalle, calorias);
      
      // Ir al historial
      window.location.href = 'registros.html';
    });
  }

  // Página de Progreso
  const elGraficoBarras = document.getElementById('grafico-barras');
  if (elGraficoBarras) {
    renderizarProgreso(elGraficoBarras);
    
    const btnReporte = document.getElementById('btn-descargar-reporte');
    const dropdownReporte = document.getElementById('dropdown-reporte');

    if (btnReporte && dropdownReporte) {
      // Toggle dropdown
      btnReporte.addEventListener('click', (e) => {
        e.stopPropagation();
        const isVisible = dropdownReporte.style.display === 'block';
        dropdownReporte.style.display = isVisible ? 'none' : 'block';
      });

      // Close dropdown when clicking outside
      document.addEventListener('click', () => {
        dropdownReporte.style.display = 'none';
      });

      // Handle options
      dropdownReporte.querySelectorAll('.Dropdown-item').forEach(item => {
        item.addEventListener('click', (e) => {
          e.stopPropagation();
          const days = parseInt(item.dataset.days);
          generarReportePDF(days);
          dropdownReporte.style.display = 'none';
        });
      });
    }
  }

  // Chatbot: administra historial, UI y llamadas a Gemini para respuestas rápidas
  const chatInput = document.getElementById('chat-input');
  const chatSendBtn = document.getElementById('chat-send-btn');
  const chatMessages = document.getElementById('chat-messages');

  if (chatInput && chatSendBtn && chatMessages) {
    
    // Cargar historial desde LocalStorage
    let chatHistory = Store.get('nt_chat_history', []);

    const persistChatHistory = () => {
      Store.set('nt_chat_history', chatHistory);
    };

    const appendMessageToHistory = (role, text) => {
      chatHistory.push({ role, parts: [{ text }] });
      if (chatHistory.length > 10) {
        chatHistory = chatHistory.slice(-10);
      }
      persistChatHistory();
    };

    // Función para renderizar mensaje en la UI
    function agregarMensajeUI(texto, esUsuario, esError = false) {
      const div = document.createElement('div');
      div.className = `Chat-message ${esUsuario ? 'Chat-message--user' : 'Chat-message--bot'}`;
      if (esError) div.style.color = 'var(--danger)';
      
      const hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      // Convertir saltos de línea a <br> para el bot
      const textoFormateado = texto.replace(/\n/g, '<br>');

      div.innerHTML = `
        <div class="Chat-bubble">${textoFormateado}</div>
        <div class="Chat-time">${hora}</div>
      `;
      
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    // Renderizar historial guardado al iniciar
    if (chatHistory.length > 0) {
      // Limpiar el mensaje de bienvenida por defecto si ya hay conversación
      chatMessages.innerHTML = '';
      chatHistory.forEach(msg => {
        const text = msg.parts[0]?.text || '';
        const isUser = msg.role === 'user';
        if (text) agregarMensajeUI(text, isUser);
      });
    }

    function mostrarIndicadorCarga() {
      const div = document.createElement('div');
      div.id = 'chat-loading';
      div.className = 'Chat-message Chat-message--bot';
      div.innerHTML = `<div class="Chat-bubble" style="font-style: italic; color: var(--muted);">Escribiendo...</div>`;
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function ocultarIndicadorCarga() {
      const div = document.getElementById('chat-loading');
      if (div) div.remove();
    }

    async function enviarMensajeGemini() {
      if (!GEMINI_API_KEY) {
        agregarMensajeUI("Error: No se ha configurado la API Key.", false, true);
        return;
      }

      mostrarIndicadorCarga();

      // 1. Construir Contexto del Usuario
      const perfil = estado.perfil;
      const metas = estado.metas.map(m => `- ${m.titulo} (${m.completada ? 'Completada' : 'Pendiente'})`).join('\n');
      
      const contextoUsuario = `
        DATOS DEL USUARIO:
        Nombre: ${perfil.nombre || 'Usuario'}
        Edad: ${perfil.edad || '?'} años
        Peso: ${perfil.peso || '?'} kg
        Objetivo: ${perfil.objetivo || 'No definido'}
        Metas actuales:
        ${metas}
      `;

      // 2. Construir System Prompt
      const systemInstruction = `
        Eres NutriBot, un nutricionista experto de la app NutriTrack.
        Tu objetivo es ayudar al usuario a mejorar su alimentación y hábitos.
        
        REGLAS IMPORTANTES:
        1. Solo respondes preguntas sobre nutrición, dietas, ejercicios, salud y el uso de esta app.
        2. Si el usuario pregunta sobre otros temas (política, cine, matemáticas, programación, etc.), responde amablemente que solo estás diseñado para hablar de salud y bienestar.
        3. Sé amable, motivador y MUY BREVE. Responde de forma corta y directa (máximo 5 o 6 líneas).
        4. Usa los datos del usuario para personalizar tus respuestas.
      `;

      // 3. Preparar payload
      const contents = [
        {
          role: "user",
          parts: [{ text: systemInstruction + "\n\n" + contextoUsuario }]
        },
        ...chatHistory
      ];

      // URL del modelo (Usando la versión solicitada por el usuario)
      const url = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.5-flash:generateContent?key=${GEMINI_API_KEY}`;

      try {
        const response = await fetch(url, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ contents })
        });

        const data = await response.json();
        ocultarIndicadorCarga();

        if (data.candidates && data.candidates[0].content) {
          const respuestaTexto = data.candidates[0].content.parts[0].text;
          
          appendMessageToHistory('model', respuestaTexto);
          agregarMensajeUI(respuestaTexto, false);
        } else {
          console.error("Error API:", data);
          let errorMsg = "Lo siento, tuve un problema al procesar tu mensaje.";
          if (data.error) {
             errorMsg += ` (${data.error.message})`;
          }
          agregarMensajeUI(errorMsg, false, true);
        }

      } catch (error) {
        console.error(error);
        ocultarIndicadorCarga();
        agregarMensajeUI("Error de conexión. Por favor verifica tu internet o la API Key.", false, true);
      }
    }

    function enviarMensaje() {
      const texto = chatInput.value.trim();
      if (texto) {
        // Mostrar mensaje del usuario inmediatamente
        agregarMensajeUI(texto, true);
        chatInput.value = '';
        appendMessageToHistory('user', texto);
        
        // Enviar a la API
        enviarMensajeGemini();
      }
    }

    chatSendBtn.addEventListener('click', enviarMensaje);
    chatInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') enviarMensaje();
    });
  }

  // Ver Perfil
  const viewNombre = document.getElementById('view-nombre');
  if (viewNombre) {
    const p = estado.perfil;
    viewNombre.textContent = p.nombre || 'Usuario';
    document.getElementById('view-email').textContent = p.email || '-';
    document.getElementById('view-edad').textContent = p.edad ? p.edad + ' años' : '-';
    document.getElementById('view-peso').textContent = p.peso ? p.peso + ' kg' : '-';
    document.getElementById('view-altura').textContent = p.altura ? p.altura + ' cm' : '-';
    document.getElementById('view-genero').textContent = p.genero || '-';
    
    // Textos legibles
    const actividadMap = {
      'sedentario': 'Sedentario', 'ligero': 'Ligero', 'moderado': 'Moderado', 
      'activo': 'Activo', 'muy_activo': 'Muy Activo'
    };
    const objetivoMap = {
      'perder_peso': 'Perder Peso', 'mantener': 'Mantener Peso', 'ganar_musculo': 'Ganar Músculo'
    };
    
    document.getElementById('view-actividad').textContent = actividadMap[p.actividad] || p.actividad || '-';
    document.getElementById('view-objetivo').textContent = objetivoMap[p.objetivo] || p.objetivo || '-';
  }

  // Editar Configuración
  const formConfig = document.getElementById('form-config');
  const btnGuardarConfig = document.getElementById('btn-guardar-config');

  if (formConfig) {
    // Llenar formulario con datos actuales
    const p = estado.perfil;
    document.getElementById('config-nombre').value = p.nombre || '';
    document.getElementById('config-email').value = p.email || '';
    document.getElementById('config-edad').value = p.edad || '';
    document.getElementById('config-peso').value = p.peso || '';
    document.getElementById('config-altura').value = p.altura || '';
    document.getElementById('config-genero').value = p.genero || '';
    document.getElementById('config-actividad').value = p.actividad || '';
    document.getElementById('config-objetivo').value = p.objetivo || '';

    // Guardar cambios
    const guardarConfiguracion = () => {
      // Obtener valores numéricos
      const edad = parseInt(document.getElementById('config-edad').value);
      const peso = parseFloat(document.getElementById('config-peso').value);
      const altura = parseInt(document.getElementById('config-altura').value);
      const genero = document.getElementById('config-genero').value;
      const actividad = document.getElementById('config-actividad').value;
      const objetivo = document.getElementById('config-objetivo').value;

      // Recalcular meta de calorías
      const nuevaMeta = calcularCalorias(peso, altura, edad, genero, actividad, objetivo);

      estado.perfil = {
        ...estado.perfil, // Preservar otros datos
        nombre: document.getElementById('config-nombre').value,
        // El email no cambia
        edad,
        peso,
        altura,
        genero,
        actividad,
        objetivo,
        metaCalorias: nuevaMeta // Actualizar meta
      };
      
      Store.set("nt_perfil", estado.perfil);
      
      // Actualizar interfaz
      const elNombre = document.getElementById('dash-nombre');
      if (elNombre) elNombre.textContent = estado.perfil.nombre;

      alert(`Configuración guardada.\nTu nueva meta diaria es: ${nuevaMeta} kcal.`);
    };

    if (btnGuardarConfig) {
      btnGuardarConfig.addEventListener('click', (e) => {
        e.preventDefault();
        guardarConfiguracion();
      });
    }
  }
});

// Funciones de renderizado

// Helper reutilizable para calcular calorías de una fecha específica
function calcularConsumoFecha(fechaStr) {
  return estado.registros
    .filter(r => r.fecha === fechaStr)
    .reduce((acc, curr) => acc + curr.calorias, 0);
}

// Helper para determinar el color de la barra de progreso
function obtenerColorBarra(porcentaje) {
  if (porcentaje > 99) return 'var(--danger-light)'; // Rojo si se pasa
  if (porcentaje > 70) return 'var(--brand2-dark)'; // Naranja/Amarillo si está cerca
  return 'var(--brand)'; // Verde si está bien
}

function renderizarMetasDashboard(contenedor) {
  if (estado.metas.length === 0) {
    contenedor.innerHTML = '<p>No tienes metas registradas aún.</p>';
    return;
  }

  const hoy = new Date();
  const fechaHoy = new Date(hoy.getTime() - (hoy.getTimezoneOffset() * 60000))
                      .toISOString().split('T')[0];

  // Ordenar por racha descendente
  const metasOrdenadas = [...estado.metas].sort((a, b) => (b.racha || 0) - (a.racha || 0));

  // Mostrar máximo 5 metas para dejar espacio a la tarjeta de "Ver todas"
  const metasParaMostrar = metasOrdenadas.slice(0, 5);

  const htmlMetas = metasParaMostrar.map(meta => {
    const isDone = meta.ultimaCompletada === fechaHoy;
    return `
      <div class="MetaCard ${isDone ? 'is-done' : ''}">
        <div class="MetaCard-header">
          <h4 class="MetaCard-title">${meta.titulo}</h4>
          ${isDone ? '<div class="icon-check-xs"></div>' : ''}
        </div>
        <div class="MetaCard-body">
            <div class="MetaCard-streakInfo">
              <span class="MetaCard-streakIcon">🔥</span>
              <span class="MetaCard-streakValue">${meta.racha || 0}</span>
              <span class="MetaCard-streakLabel">días seguidos</span>
            </div>
        </div>
        <div class="MetaCard-footer">
          <span class="MetaCard-status">${isDone ? '¡Completado hoy!' : 'Pendiente'}</span>
        </div>
      </div>
    `;
  }).join('');

  // Tarjeta final para ver todas
  const cardVerTodas = `
    <div class="MetaCard" style="justify-content: center; align-items: center; background: var(--light);">
      <a href="metas.html" class="btn btn--primary">Ver todas las metas</a>
    </div>
  `;

  contenedor.innerHTML = `
    <div class="DashMetasGrid">
      ${htmlMetas}
      ${cardVerTodas}
    </div>
  `;
}

function renderizarResumenCalorias(contenedor) {
  // 1. Calcular consumido hoy
  const hoy = new Date();
  const fechaHoy = new Date(hoy.getTime() - (hoy.getTimezoneOffset() * 60000))
                    .toISOString().split('T')[0];

  // Usamos la función helper para garantizar consistencia con el resto de la app
  const consumido = calcularConsumoFecha(fechaHoy);

  // 2. Obtener meta
  const meta = estado.perfil.metaCalorias || 2000;
  const restante = meta - consumido;
  const porcentaje = Math.min((consumido / meta) * 100, 100);
  
  // Color de la barra
  const colorBarra = obtenerColorBarra(porcentaje);
  const mensaje = consumido > meta 
    ? `Has excedido tu meta por ${Math.abs(restante)} kcal.` 
    : `Te quedan <strong>${restante} kcal</strong> para consumir hoy.`;

  // Actualizar elementos del DOM
  const elMeta = document.getElementById('resumen-meta');
  const elConsumido = document.getElementById('resumen-consumido');
  const elRestante = document.getElementById('resumen-restante');
  const elBarra = document.getElementById('resumen-barra');
  const elMensaje = document.getElementById('resumen-mensaje');

  if (elMeta) elMeta.textContent = meta;
  if (elConsumido) elConsumido.textContent = consumido;
  
  if (elRestante) {
    elRestante.textContent = restante;
    // Resetear clases
    elRestante.classList.remove('is-danger', 'is-success');
    // Agregar clase correspondiente
    if (restante < 0) elRestante.classList.add('is-danger');
    else elRestante.classList.add('is-success');
  }

  if (elBarra) {
    elBarra.style.width = `${porcentaje}%`;
    elBarra.style.background = colorBarra;
  }

  if (elMensaje) {
    elMensaje.innerHTML = mensaje;
  }
}

function renderizarListaMetas(contenedor) {
  if (estado.metas.length > 0) {
    contenedor.innerHTML = '';
    
    // Fecha de hoy para comparar
    const hoy = new Date();
    const fechaHoy = new Date(hoy.getTime() - (hoy.getTimezoneOffset() * 60000))
                        .toISOString().split('T')[0];

    const template = document.getElementById('template-meta-item');

    estado.metas.forEach(meta => {
      if (template) {
        const clone = template.content.cloneNode(true);
        
        // Rellenar datos
        clone.querySelector('.MetaItem-title').textContent = meta.titulo;
        clone.querySelector('.MetaItem-desc').textContent = meta.descripcion;
        
        // Configurar botones
        const btnDelete = clone.querySelector('.btn-delete');
        const btnComplete = clone.querySelector('.btn-complete');
        const btnEdit = clone.querySelector('.btn-edit');
        
        if (btnDelete) btnDelete.dataset.id = meta.id;
        if (btnComplete) btnComplete.dataset.id = meta.id;
        if (btnEdit) btnEdit.dataset.id = meta.id;

        // Mostrar Racha
        const elStreak = clone.querySelector('.MetaItem-streak');
        if (elStreak && meta.racha > 0) {
          elStreak.textContent = `🔥 ${meta.racha} días`;
        }

        // Estado y Estilos
        const completadoHoy = meta.ultimaCompletada === fechaHoy;
        const badge = clone.querySelector('.MetaItem-badge');
        
        if (completadoHoy) {
          badge.textContent = '✓ Realizado hoy';
          badge.classList.add('MetaItem-badge--done');
          
          // Deshabilitar botón de completar
          if (btnComplete) {
            btnComplete.disabled = true;
            btnComplete.title = "Ya completado hoy";
          }
        } else {
          badge.textContent = '⚠ Pendiente';
          badge.classList.add('MetaItem-badge--pending');
        }

        contenedor.appendChild(clone);
      }
    });
  } else {
    contenedor.innerHTML = '<p class="MetaItem-empty">No hay hábitos activos. ¡Agrega uno nuevo arriba!</p>';
  }
}

function agregarMeta(titulo, descripcion) {
  const nuevaMeta = {
    id: Date.now(),
    titulo,
    descripcion,
    ultimaCompletada: null, // Inicialmente nunca completada
    racha: 0
  };
  estado.metas.push(nuevaMeta);
  Store.set("nt_metas", estado.metas);
}

function eliminarMeta(id) {
  estado.metas = estado.metas.filter(m => m.id !== id);
  Store.set("nt_metas", estado.metas);
}

function completarMeta(id) {
  const hoy = new Date();
  const fechaHoy = new Date(hoy.getTime() - (hoy.getTimezoneOffset() * 60000))
                      .toISOString().split('T')[0];
  
  // Calcular fecha de ayer para la racha
  const ayerDate = new Date(hoy);
  ayerDate.setDate(hoy.getDate() - 1);
  const fechaAyer = new Date(ayerDate.getTime() - (ayerDate.getTimezoneOffset() * 60000))
                      .toISOString().split('T')[0];

  const meta = estado.metas.find(m => m.id === id);
  if (meta) {
    // Si ya se completó hoy, no hacemos nada
    if (meta.ultimaCompletada === fechaHoy) return;

    // Lógica de Racha
    if (meta.ultimaCompletada === fechaAyer) {
      meta.racha = (meta.racha || 0) + 1;
    } else {
      // Si se rompió la racha (no se hizo ayer), reinicia a 1
      meta.racha = 1;
    }

    meta.ultimaCompletada = fechaHoy;
    Store.set("nt_metas", estado.metas);
  }
}

let metaEditandoId = null;

function editarMeta(id) {
  const meta = estado.metas.find(m => m.id === id);
  if (meta) {
    const inputTitulo = document.getElementById('meta-titulo');
    const inputDesc = document.getElementById('meta-desc');
    const btnSubmit = document.querySelector('#form-meta button[type="submit"]');
    
    if (inputTitulo && inputDesc) {
      inputTitulo.value = meta.titulo;
      inputDesc.value = meta.descripcion;
      inputTitulo.focus();
      
      metaEditandoId = id;
      if (btnSubmit) btnSubmit.textContent = "Guardar Cambios";
    }
  }
}

function guardarEdicionMeta(titulo, descripcion) {
  if (metaEditandoId) {
    const meta = estado.metas.find(m => m.id === metaEditandoId);
    if (meta) {
      meta.titulo = titulo;
      meta.descripcion = descripcion;
      Store.set("nt_metas", estado.metas);
    }
    metaEditandoId = null;
  }
}

// Mapa de iconos por categoría
const CATEGORIA_ICONOS = {
  'Frutas': '🍎',
  'Verduras': '🥦',
  'Proteínas': '🥩',
  'Carbohidratos': '🍞',
  'Lácteos': '🥛',
  'Otros': '🍽️'
};

function renderizarCatalogoAlimentos(contenedor, filtro = 'todos') {
  let alimentosFiltrados = estado.alimentos;

  if (filtro !== 'todos') {
    alimentosFiltrados = alimentosFiltrados.filter(a => a.categoria === filtro);
  }

  if (alimentosFiltrados.length > 0) {
    contenedor.innerHTML = '';
    const template = document.getElementById('template-food-card');

    alimentosFiltrados.forEach(alimento => {
      if (template) {
        const clone = template.content.cloneNode(true);
        
        // Obtener icono según categoría (o default)
        const icono = CATEGORIA_ICONOS[alimento.categoria] || '🍎';

        // Rellenar datos
        clone.querySelector('.FoodCard-icon').textContent = icono;
        clone.querySelector('.FoodCard-title').textContent = alimento.nombre;
        clone.querySelector('.FoodCard-cal').textContent = `${alimento.calorias} kcal`;
        
        // Configurar botones
        const btnRegister = clone.querySelector('.btn-register-food');
        const btnDelete = clone.querySelector('.btn-delete-food');
        
        if (btnRegister) btnRegister.dataset.id = alimento.id;
        if (btnDelete) btnDelete.dataset.id = alimento.id;

        contenedor.appendChild(clone);
      }
    });
  } else {
    contenedor.innerHTML = '<p class="FoodCard-empty">Tu catálogo está vacío. ¡Busca alimentos arriba!</p>';
  }
}

function agregarAlimento(nombre, calorias, categoria = 'Otros') {
  const nuevoAlimento = {
    id: Date.now(),
    nombre,
    calorias: parseInt(calorias) || 0,
    categoria
  };
  estado.alimentos.push(nuevoAlimento);
  Store.set("nt_alimentos", estado.alimentos);
}

function eliminarAlimento(id) {
  estado.alimentos = estado.alimentos.filter(a => a.id !== id);
  Store.set("nt_alimentos", estado.alimentos);
}

function renderizarHistorialRegistros(contenedor, filtro = '7dias') {
  let registrosFiltrados = estado.registros;
  
  // Lógica de filtrado
  const hoy = new Date();
  hoy.setHours(0, 0, 0, 0); // Resetear horas para comparar solo fechas

  if (filtro === '7dias') {
    const hace7dias = new Date(hoy);
    hace7dias.setDate(hoy.getDate() - 7);
    
    registrosFiltrados = registrosFiltrados.filter(reg => {
      const fechaReg = new Date(reg.fecha + 'T00:00:00');
      return fechaReg >= hace7dias;
    });
  } else if (filtro === '30dias') {
    const hace30dias = new Date(hoy);
    hace30dias.setDate(hoy.getDate() - 30);
    
    registrosFiltrados = registrosFiltrados.filter(reg => {
      const fechaReg = new Date(reg.fecha + 'T00:00:00');
      return fechaReg >= hace30dias;
    });
  }
  // 'todo' no filtra nada, muestra todo el historial

  if (registrosFiltrados.length > 0) {
    contenedor.innerHTML = '';
    
    // Agrupar registros por fecha
    const registrosPorFecha = {};
    registrosFiltrados.forEach(reg => {
      if (!registrosPorFecha[reg.fecha]) registrosPorFecha[reg.fecha] = [];
      registrosPorFecha[reg.fecha].push(reg);
    });

    // Ordenar: más reciente primero
    const fechasOrdenadas = Object.keys(registrosPorFecha).sort().reverse();

    fechasOrdenadas.forEach(fecha => {
      // Título de la fecha
      // Agregamos T00:00:00 para asegurar que se interprete como hora local y no UTC
      const fechaObj = new Date(fecha + 'T00:00:00');
      const fechaHeader = document.createElement('h4');
      fechaHeader.className = 'RegistroHeader';
      fechaHeader.textContent = fechaObj.toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
      contenedor.appendChild(fechaHeader);

      // Items del día
      registrosPorFecha[fecha].forEach(reg => {
        const item = document.createElement('div');
        item.className = 'RegistroItem';
        
        item.innerHTML = `
          <div>
            <span class="RegistroItem-comida">${reg.comida}</span>
            <span class="RegistroItem-detalle">${reg.detalle}</span>
          </div>
          <div class="RegistroItem-cal">${reg.calorias} kcal</div>
        `;
        contenedor.appendChild(item);
      });
    });

  } else {
    contenedor.innerHTML = '<p style="text-align: center; color: var(--muted);">No hay registros para este periodo.</p>';
  }
}

function agregarRegistro(fecha, comida, detalle, calorias) {
  const nuevoRegistro = {
    id: Date.now(),
    fecha,
    comida,
    detalle,
    calorias: parseInt(calorias) || 0
  };
  // Insertar al principio
  estado.registros.unshift(nuevoRegistro);
  Store.set("nt_registros", estado.registros);
}

// Calcula las calorías registradas en la semana y construye el gráfico de barras del progreso
function renderizarProgreso(contenedor) {
  // Calcular totales
  const hoy = new Date();
  
  // Obtener lunes de esta semana
  const diaSemana = hoy.getDay(); // 0=Dom, 6=Sab
  const diff = hoy.getDate() - diaSemana + (diaSemana === 0 ? -6 : 1); // Retroceder al lunes
  const lunes = new Date(hoy);
  lunes.setDate(diff);
  lunes.setHours(0, 0, 0, 0);

  // Obtener domingo
  const domingo = new Date(lunes);
  domingo.setDate(lunes.getDate() + 6);
  domingo.setHours(23, 59, 59, 999);

  // Filtrar registros de esta semana
  const registrosSemana = estado.registros.filter(r => {
    // Normalizar fecha agregando hora para evitar desfase de zona horaria
    const f = new Date(r.fecha + 'T00:00:00');
    f.setHours(12,0,0,0); // Mediodía para evitar errores de borde
    return f >= lunes && f <= domingo;
  });

  const totalCalorias = registrosSemana.reduce((acc, curr) => acc + curr.calorias, 0);
  const diasUnicos = [...new Set(registrosSemana.map(r => r.fecha))].length;
  const promedioDiario = diasUnicos > 0 ? Math.round(totalCalorias / diasUnicos) : 0;

  // Actualizar contadores
  const elTotalCal = document.getElementById('stat-total-calorias');
  const elDiasReg = document.getElementById('stat-dias-registrados');
  const elMetasAct = document.getElementById('stat-metas-cumplidas');

  if (elTotalCal) elTotalCal.textContent = totalCalorias;
  if (elDiasReg) elDiasReg.textContent = promedioDiario;
  if (elMetasAct) elMetasAct.textContent = estado.metas.length;

  // Generar gráfico
  const caloriasPorDia = {};
  
  // Crear días vacíos
  for (let i = 0; i < 7; i++) {
    const d = new Date(lunes);
    d.setDate(lunes.getDate() + i);
    // Ajuste de zona horaria para obtener la fecha local correcta en formato ISO
    const fechaStr = new Date(d.getTime() - (d.getTimezoneOffset() * 60000))
                        .toISOString().split('T')[0];
    caloriasPorDia[fechaStr] = 0;
  }

  // Llenar con datos reales
  registrosSemana.forEach(r => {
    if (caloriasPorDia[r.fecha] !== undefined) {
      caloriasPorDia[r.fecha] += r.calorias;
    }
  });

  // Dibujar barras
  contenedor.innerHTML = '';
  
  // Obtener meta del usuario o usar default 2000
  const metaDiaria = estado.perfil.metaCalorias || 2000;

  Object.keys(caloriasPorDia).sort().forEach(fecha => {
    const cal = caloriasPorDia[fecha];
    // Usar la meta personalizada
    const porcentaje = Math.min((cal / metaDiaria) * 100, 100);
    const colorBarra = obtenerColorBarra(porcentaje);
    
    // Nombre del día
    // UTC !
    // Usar componentes locales
    const [y, m, d] = fecha.split('-').map(Number);
    const fechaObj = new Date(y, m - 1, d); 
    const diaNombre = fechaObj.toLocaleDateString('es-ES', { weekday: 'long' });

    const barraHTML = `
      <div class="ProgresoRow">
        <div class="Progreso-day">${diaNombre}</div>
        <div class="Progreso-barContainer">
          <div class="ProgressBar">
            <div class="ProgressBar-fill" style="width: ${porcentaje}%; background: ${colorBarra};"></div>
          </div>
        </div>
        <div class="Progreso-val">${cal} / ${metaDiaria} kcal</div>
      </div>
    `;
    contenedor.innerHTML += barraHTML;
  });
}

async function generarReportePDF(dias) {
  const { jsPDF } = window.jspdf;
  if (!jsPDF) {
    alert("Error: La librería PDF no se cargó correctamente.");
    return;
  }

  const doc = new jsPDF();
  
  // --- 1. PREPARACIÓN DE DATOS ---
  const hoy = new Date();
  hoy.setHours(23, 59, 59, 999);
  const fechaInicio = new Date(hoy);
  fechaInicio.setDate(hoy.getDate() - dias);
  fechaInicio.setHours(0, 0, 0, 0);

  const registrosFiltrados = estado.registros.filter(r => {
    const fechaReg = new Date(r.fecha + 'T00:00:00');
    return fechaReg >= fechaInicio && fechaReg <= hoy;
  });

  // Cálculos Generales
  const totalCalorias = registrosFiltrados.reduce((acc, curr) => acc + curr.calorias, 0);
  const diasUnicos = [...new Set(registrosFiltrados.map(r => r.fecha))].length;
  const promedio = diasUnicos > 0 ? Math.round(totalCalorias / diasUnicos) : 0;
  const meta = estado.perfil.metaCalorias || 2000;
  const cumplimiento = Math.round((promedio / meta) * 100);

  // Cálculos por Comida
  const porComida = {
    'Desayuno': { count: 0, cal: 0 },
    'Almuerzo': { count: 0, cal: 0 },
    'Cena': { count: 0, cal: 0 },
    'Snack': { count: 0, cal: 0 }
  };

  registrosFiltrados.forEach(r => {
    const tipo = r.comida || 'Snack';
    if (!porComida[tipo]) porComida[tipo] = { count: 0, cal: 0 };
    porComida[tipo].count++;
    porComida[tipo].cal += r.calorias;
  });

  // Formateo de Textos
  const objetivoMap = {
    'perder_peso': 'Perder Peso', 'mantener': 'Mantener Peso', 'ganar_musculo': 'Ganar Músculo'
  };
  const objetivoTexto = objetivoMap[estado.perfil.objetivo] || estado.perfil.objetivo || 'No definido';

  // --- 2. GENERACIÓN DEL DOCUMENTO ---
  
  // Encabezado
  doc.setFontSize(22);
  doc.setTextColor(40, 167, 69); // Verde Brand
  doc.text("NutriTrack", 14, 20);
  
  doc.setFontSize(12);
  doc.setTextColor(100);
  doc.text("Reporte de Progreso Nutricional", 14, 28);
  doc.text(`Generado el: ${new Date().toLocaleDateString()}`, 150, 28, { align: 'right' });

  doc.setDrawColor(200);
  doc.line(14, 32, 196, 32);

  // Sección 1: Perfil
  doc.setFontSize(14);
  doc.setTextColor(0);
  doc.text("1. Perfil del Usuario", 14, 42);

  doc.setFontSize(10);
  doc.setTextColor(60);
  const col1 = 14;
  const col2 = 100;
  let y = 50;

  doc.text(`Nombre: ${estado.perfil.nombre || 'Usuario'}`, col1, y);
  doc.text(`Meta Diaria: ${meta} kcal`, col2, y);
  y += 6;
  doc.text(`Peso Actual: ${estado.perfil.peso || '-'} kg`, col1, y);
  doc.text(`Objetivo: ${objetivoTexto}`, col2, y);

  // Sección 2: Resumen del Periodo
  y += 14;
  doc.setFontSize(14);
  doc.setTextColor(0);
  doc.text(`2. Resumen (Últimos ${dias} días)`, 14, y);

  y += 8;
  doc.setFontSize(10);
  doc.setTextColor(60);
  
  // Dibujar cajas de estadísticas simples
  const drawStatBox = (label, value, x, y) => {
    doc.setFillColor(245, 245, 245);
    doc.roundedRect(x, y, 40, 20, 2, 2, 'F');
    doc.setFontSize(8);
    doc.setTextColor(100);
    doc.text(label, x + 20, y + 6, { align: 'center' });
    doc.setFontSize(12);
    doc.setTextColor(40, 167, 69);
    doc.text(value, x + 20, y + 15, { align: 'center' });
  };

  drawStatBox("Promedio Diario", `${promedio} kcal`, 14, y);
  drawStatBox("Cumplimiento", `${cumplimiento}%`, 60, y);
  drawStatBox("Días Registrados", `${diasUnicos}`, 106, y);
  drawStatBox("Total Consumido", `${totalCalorias}`, 152, y);

  // Sección 3: Distribución por Comidas
  y += 30;
  doc.setFontSize(14);
  doc.setTextColor(0);
  doc.text("3. Distribución por Comidas", 14, y);

  const dataComidas = [
    ['Comida', 'Registros', 'Calorías Totales', 'Promedio por Comida'],
    ['Desayuno', porComida['Desayuno'].count, porComida['Desayuno'].cal, Math.round(porComida['Desayuno'].cal / (porComida['Desayuno'].count || 1))],
    ['Almuerzo', porComida['Almuerzo'].count, porComida['Almuerzo'].cal, Math.round(porComida['Almuerzo'].cal / (porComida['Almuerzo'].count || 1))],
    ['Cena', porComida['Cena'].count, porComida['Cena'].cal, Math.round(porComida['Cena'].cal / (porComida['Cena'].count || 1))],
    ['Snacks', porComida['Snack'].count, porComida['Snack'].cal, Math.round(porComida['Snack'].cal / (porComida['Snack'].count || 1))]
  ];

  doc.autoTable({
    startY: y + 5,
    head: [dataComidas[0]],
    body: dataComidas.slice(1),
    theme: 'grid',
    headStyles: { fillColor: [100, 100, 100] },
    styles: { fontSize: 9, cellPadding: 2 },
    columnStyles: { 0: { fontStyle: 'bold' } }
  });

  // Sección 4: Historial Detallado
  const finalY = doc.lastAutoTable.finalY + 15;
  doc.setFontSize(14);
  doc.setTextColor(0);
  doc.text("4. Historial Detallado", 14, finalY);

  const tableData = registrosFiltrados.map(r => [
    r.fecha,
    r.comida,
    r.detalle,
    `${r.calorias} kcal`
  ]);

  doc.autoTable({
    startY: finalY + 5,
    head: [['Fecha', 'Comida', 'Alimento/Detalle', 'Calorías']],
    body: tableData,
    theme: 'striped',
    headStyles: { fillColor: [40, 167, 69] },
    styles: { fontSize: 9 },
  });

  // Footer
  const pageCount = doc.internal.getNumberOfPages();
  for(let i = 1; i <= pageCount; i++) {
    doc.setPage(i);
    doc.setFontSize(8);
    doc.setTextColor(150);
    doc.text(`Página ${i} de ${pageCount} - NutriTrack`, 196, doc.internal.pageSize.height - 10, { align: 'right' });
  }

  doc.save(`NutriTrack_Reporte_${dias}dias.pdf`);
}



