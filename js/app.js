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

// Lógica principal del Dashboard

// Manejo del estado con LocalStorage
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

// Datos por defecto
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
    { id: 1, titulo: "Comer balanceado", descripcion: "Incluye proteína y vegetales en la cena.", completada: false },
    { id: 2, titulo: "Ejercicio diario", descripcion: "20 min de caminata o trote.", completada: false }
  ],
  alimentos: [
    { id: 1, nombre: "Manzana", calorias: 52 },
    { id: 2, nombre: "Pollo (100g)", calorias: 165 },
    { id: 3, nombre: "Arroz (100g)", calorias: 130 }
  ],
  registros: [
    { id: 1, fecha: "2025-11-20", comida: "Desayuno", detalle: "Avena con manzana", calorias: 350 },
    { id: 2, fecha: "2025-11-20", comida: "Almuerzo", detalle: "Pollo con arroz y ensalada", calorias: 650 },
    { id: 3, fecha: "2025-11-19", comida: "Cena", detalle: "Yogurt con frutas", calorias: 200 }
  ]
};

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

// Inicialización de la página
document.addEventListener('DOMContentLoaded', () => {

  // Verificar sesión al cargar
  Auth.verificarSesion();

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

  // Página de Metas
  const elListaMetas = document.getElementById('lista-metas');
  const elFormMeta = document.getElementById('form-meta');
  
  if (elListaMetas) {
    renderizarListaMetas(elListaMetas);
    
    // Eliminar meta
    elListaMetas.addEventListener('click', (e) => {
      if (e.target.closest('.btn-delete')) {
        const id = parseInt(e.target.closest('.btn-delete').dataset.id);
        eliminarMeta(id);
        renderizarListaMetas(elListaMetas);
      }
    });
  }

  if (elFormMeta) {
    elFormMeta.addEventListener('submit', (e) => {
      e.preventDefault();
      const titulo = document.getElementById('meta-titulo').value;
      const desc = document.getElementById('meta-desc').value;
      
      agregarMeta(titulo, desc);
      
      // Limpiar formulario y recargar lista
      elFormMeta.reset();
      if (elListaMetas) renderizarListaMetas(elListaMetas);
    });
  }

  // Página de Alimentos
  const elListaAlimentos = document.getElementById('lista-alimentos');
  const elFormAlimento = document.getElementById('form-alimento');

  if (elListaAlimentos) {
    renderizarCatalogoAlimentos(elListaAlimentos);

    // Eliminar alimento
    elListaAlimentos.addEventListener('click', (e) => {
      if (e.target.closest('.btn-delete-food')) {
        const id = parseInt(e.target.closest('.btn-delete-food').dataset.id);
        eliminarAlimento(id);
        renderizarCatalogoAlimentos(elListaAlimentos);
      }
    });
  }

  if (elFormAlimento) {
    elFormAlimento.addEventListener('submit', (e) => {
      e.preventDefault();
      const nombre = document.getElementById('alimento-nombre').value;
      const calorias = document.getElementById('alimento-calorias').value;

      agregarAlimento(nombre, calorias);
      
      elFormAlimento.reset();
      if (elListaAlimentos) renderizarCatalogoAlimentos(elListaAlimentos);
    });
  }

  // Historial de Registros
  const elListaRegistros = document.getElementById('lista-registros');
  if (elListaRegistros) {
    renderizarHistorialRegistros(elListaRegistros);
  }

  // Formulario de Registro
  const elFormRegistro = document.getElementById('form-registro-comida');
  if (elFormRegistro) {
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
    if (btnReporte) {
      btnReporte.addEventListener('click', () => {
        alert("Generando reporte PDF... (Simulación)\n\nEl reporte se descargará en breve.");
      });
    }
  }

  // Chatbot
  const chatInput = document.getElementById('chat-input');
  const chatSendBtn = document.getElementById('chat-send-btn');
  const chatMessages = document.getElementById('chat-messages');

  if (chatInput && chatSendBtn && chatMessages) {
    
    function agregarMensaje(texto, esUsuario) {
      const div = document.createElement('div');
      div.className = `Chat-message ${esUsuario ? 'Chat-message--user' : 'Chat-message--bot'}`;
      
      const hora = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
      
      div.innerHTML = `
        <div class="Chat-bubble">${texto}</div>
        <div class="Chat-time">${hora}</div>
      `;
      
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight; // Bajar scroll automáticamente
    }

    function responderBot(mensajeUsuario) {
      // Respuestas básicas del bot
      let respuesta = "Lo siento, no entendí eso. ¿Puedes intentar preguntar de otra forma?";
      const msg = mensajeUsuario.toLowerCase();

      if (msg.includes('hola') || msg.includes('buenos')) {
        respuesta = "¡Hola! ¿Cómo va tu día? ¿Necesitas ayuda con tu dieta?";
      } else if (msg.includes('calorias') || msg.includes('calorías')) {
        respuesta = "Las calorías son la energía que obtienes de los alimentos. Para perder peso, intenta mantener un déficit calórico moderado.";
      } else if (msg.includes('meta') || msg.includes('objetivo')) {
        respuesta = "Tus metas son importantes. Recuerda que puedes configurarlas en la sección de 'Metas'. ¡Tú puedes lograrlas!";
      } else if (msg.includes('agua') || msg.includes('hidratacion')) {
        respuesta = "Beber suficiente agua es vital. Se recomienda al menos 2 litros al día, pero depende de tu actividad física.";
      } else if (msg.includes('gracias')) {
        respuesta = "¡De nada! Estoy aquí para ayudarte en tu camino saludable.";
      } else if (msg.includes('receta') || msg.includes('comida')) {
        respuesta = "Puedo sugerirte muchas recetas saludables. ¿Prefieres algo dulce o salado?";
      }

      // Simular espera
      setTimeout(() => {
        agregarMensaje(respuesta, false);
      }, 1000);
    }

    function enviarMensaje() {
      const texto = chatInput.value.trim();
      if (texto) {
        agregarMensaje(texto, true);
        chatInput.value = '';
        responderBot(texto);
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
      estado.perfil = {
        ...estado.perfil, // Preservar otros datos
        nombre: document.getElementById('config-nombre').value,
        // El email no cambia
        edad: document.getElementById('config-edad').value,
        peso: document.getElementById('config-peso').value,
        altura: document.getElementById('config-altura').value,
        genero: document.getElementById('config-genero').value,
        actividad: document.getElementById('config-actividad').value,
        objetivo: document.getElementById('config-objetivo').value
      };
      
      Store.set("nt_perfil", estado.perfil);
      
      // Actualizar interfaz
      const elNombre = document.getElementById('dash-nombre');
      if (elNombre) elNombre.textContent = estado.perfil.nombre;

      alert("Configuración guardada correctamente.");
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

function renderizarMetasDashboard(contenedor) {
  if (estado.metas.length > 0) {
    contenedor.innerHTML = '';
    estado.metas.slice(0, 3).forEach(meta => { // Solo mostrar 3
      const div = document.createElement('div');
      div.className = 'MetaDashItem';
      div.innerHTML = `
        <h4>${meta.titulo}</h4>
        <p>${meta.descripcion}</p>
      `;
      contenedor.appendChild(div);
    });
  } else {
    contenedor.innerHTML = '<p>No tienes metas registradas aún.</p>';
  }
}

function renderizarListaMetas(contenedor) {
  if (estado.metas.length > 0) {
    contenedor.innerHTML = '';
    estado.metas.forEach(meta => {
      const div = document.createElement('div');
      div.className = 'MetaItem';
      
      div.innerHTML = `
        <div>
          <h4 class="MetaItem-title">${meta.titulo}</h4>
          <p class="MetaItem-desc">${meta.descripcion}</p>
        </div>
        <button class="btn-delete" data-id="${meta.id}">Eliminar</button>
      `;
      contenedor.appendChild(div);
    });
  } else {
    contenedor.innerHTML = '<p style="text-align:center; padding: 2rem; color: var(--muted);">No hay metas activas. ¡Agrega una nueva arriba!</p>';
  }
}

function agregarMeta(titulo, descripcion) {
  const nuevaMeta = {
    id: Date.now(),
    titulo,
    descripcion,
    completada: false
  };
  estado.metas.push(nuevaMeta);
  Store.set("nt_metas", estado.metas);
}

function eliminarMeta(id) {
  estado.metas = estado.metas.filter(m => m.id !== id);
  Store.set("nt_metas", estado.metas);
}

function renderizarCatalogoAlimentos(contenedor) {
  if (estado.alimentos.length > 0) {
    contenedor.innerHTML = '';
    estado.alimentos.forEach(alimento => {
      const div = document.createElement('div');
      div.className = 'FoodCard';
      
      div.innerHTML = `
        <div class="FoodCard-icon">🍎</div>
        <h4 class="FoodCard-title">${alimento.nombre}</h4>
        <p class="FoodCard-cal">${alimento.calorias} kcal</p>
        <button class="btn-delete-food" data-id="${alimento.id}">Eliminar</button>
      `;
      contenedor.appendChild(div);
    });
  } else {
    contenedor.innerHTML = '<p style="grid-column: 1/-1; text-align: center; color: var(--muted);">Tu catálogo está vacío.</p>';
  }
}

function agregarAlimento(nombre, calorias) {
  const nuevoAlimento = {
    id: Date.now(),
    nombre,
    calorias: parseInt(calorias) || 0
  };
  estado.alimentos.push(nuevoAlimento);
  Store.set("nt_alimentos", estado.alimentos);
}

function eliminarAlimento(id) {
  estado.alimentos = estado.alimentos.filter(a => a.id !== id);
  Store.set("nt_alimentos", estado.alimentos);
}

function renderizarHistorialRegistros(contenedor) {
  if (estado.registros.length > 0) {
    contenedor.innerHTML = '';
    
    // Agrupar registros por fecha
    const registrosPorFecha = {};
    estado.registros.forEach(reg => {
      if (!registrosPorFecha[reg.fecha]) registrosPorFecha[reg.fecha] = [];
      registrosPorFecha[reg.fecha].push(reg);
    });

    // Ordenar: más reciente primero
    const fechasOrdenadas = Object.keys(registrosPorFecha).sort().reverse();

    fechasOrdenadas.forEach(fecha => {
      // Título de la fecha
      const fechaHeader = document.createElement('h4');
      fechaHeader.className = 'RegistroHeader';
      fechaHeader.textContent = new Date(fecha).toLocaleDateString('es-ES', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
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
    contenedor.innerHTML = '<p style="text-align: center; color: var(--muted);">No hay registros disponibles.</p>';
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
    const fechaReg = new Date(r.fecha);
    // Normalizar fecha
    // (Viene del input date)
    // Evitar problemas de zona horaria
    // (Simplificado)
    // Usar mediodía para evitar cambios de día
    // (Ajuste de hora)
    const f = new Date(r.fecha);
    f.setHours(12,0,0,0); // Mediodía para evitar errores
    return f >= lunes && f <= domingo;
  });

  const totalCalorias = registrosSemana.reduce((acc, curr) => acc + curr.calorias, 0);
  const diasUnicos = [...new Set(registrosSemana.map(r => r.fecha))].length;

  // Actualizar contadores
  const elTotalCal = document.getElementById('stat-total-calorias');
  const elDiasReg = document.getElementById('stat-dias-registrados');
  const elMetasAct = document.getElementById('stat-metas-cumplidas');

  if (elTotalCal) elTotalCal.textContent = totalCalorias;
  if (elDiasReg) elDiasReg.textContent = diasUnicos;
  if (elMetasAct) elMetasAct.textContent = estado.metas.length;

  // Generar gráfico
  const caloriasPorDia = {};
  
  // Crear días vacíos
  for (let i = 0; i < 7; i++) {
    const d = new Date(lunes);
    d.setDate(lunes.getDate() + i);
    const fechaStr = d.toISOString().split('T')[0]; // YYYY-MM-DD
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
  Object.keys(caloriasPorDia).sort().forEach(fecha => {
    const cal = caloriasPorDia[fecha];
    const maxCal = 2500; // Meta diaria (ejemplo)
    const porcentaje = Math.min((cal / maxCal) * 100, 100);
    
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
          <div class="progress-bar-container">
            <div class="progress-bar-fill" style="width: ${porcentaje}%; background: ${cal > maxCal ? 'var(--brand2)' : 'var(--brand)'};"></div>
          </div>
        </div>
        <div class="Progreso-val">${cal} kcal</div>
      </div>
    `;
    contenedor.innerHTML += barraHTML;
  });
}



