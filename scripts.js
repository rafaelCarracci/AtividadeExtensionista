// ── CHART.JS DEFAULTS ──────────────────────────────────────────────────────
Chart.defaults.font.family = "'DM Sans', sans-serif";
Chart.defaults.color = '#7a7870';

const COLORS = {
  blue:   '#1d4ed8',
  red:    '#dc2626',
  amber:  '#d97706',
  green:  '#16a34a',
  slate:  '#64748b',
  indigo: '#4f46e5',
  teal:   '#0d9488',
};
const PALETTE = Object.values(COLORS);

// Mensagens suspeitas
new Chart(document.getElementById('chartMsg'), {
  type: 'doughnut',
  data: {
    labels: ['Sim','Não','Não sei'],
    datasets: [{ data: [141, 10, 4], backgroundColor: ['#e11d48', '#8b5cf6', '#f97316'],
      borderWidth: 2, borderColor: '#fff', hoverOffset: 6 }]
  },
  options: { responsive: true, maintainAspectRatio: false, cutout: '65%',
    plugins: { legend: { position: 'bottom', labels: { padding: 14, boxWidth: 12 } } } }
});

// Conta invadida
new Chart(document.getElementById('chartInv'), {
  type: 'doughnut',
  data: {
    labels: ['Não','Sim','Não sei'],
    datasets: [{ data: [104, 27, 24], backgroundColor: ['#0891b2', '#be123c', '#eab308'],
      borderWidth: 2, borderColor: '#fff', hoverOffset: 6 }]
  },
  options: { responsive: true, maintainAspectRatio: false, cutout: '65%',
    plugins: { legend: { position: 'bottom', labels: { padding: 14, boxWidth: 12 } } } }
});

// Frequência senha
new Chart(document.getElementById('chartFreq'), {
  type: 'bar',
  data: {
    labels: ['Nunca troco','1 vez por ano','A cada 6 meses','A cada 3 meses ou menos'],
    datasets: [{
      label: 'Respondentes',
      data: [81, 38, 22, 14],
      backgroundColor: ['#7c3aed', '#6d28d9', '#4f46e5', '#3730a3'],
      borderRadius: 6, borderSkipped: false,
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false, indexAxis: 'y',
    plugins: { legend: { display: false } },
    scales: {
      x: { grid: { color: '#e8e5df' }, border: { display: false } },
      y: { grid: { display: false }, border: { display: false } }
    }
  }
});

// Qualidade senha
new Chart(document.getElementById('chartSenha'), {
  type: 'doughnut',
  data: {
    labels: ['Senhas Fortes','Às vezes fracas','Sempre fracas'],
    datasets: [{ data: [86, 46, 23], backgroundColor: ['#15803d', '#b45309', '#991b1b'],
      borderWidth: 2, borderColor: '#fff', hoverOffset: 6 }]
  },
  options: { responsive: true, maintainAspectRatio: false, cutout: '65%',
    plugins: { legend: { position: 'bottom', labels: { padding: 14, boxWidth: 12 } } } }
});

// Por cidade
new Chart(document.getElementById('chartCidade'), {
  type: 'bar',
  data: {
    labels: ['Jundiaí','Itatiba','Outros','São Paulo','Itupeva','F. Morato','F. da Rocha'],
    datasets: [{
      label: 'Respondentes',
      data: [75, 27, 22, 15, 6, 6, 4],
      backgroundColor: ['#1d4ed8','#0891b2','#0d9488','#16a34a','#7c3aed','#db2777','#ea580c'],
      borderRadius: 6, borderSkipped: false,
    }]
  },
  options: {
    responsive: true, maintainAspectRatio: false,
    plugins: { legend: { display: false } },
    scales: {
      y: { grid: { color: '#e8e5df' }, border: { display: false } },
      x: { grid: { display: false }, border: { display: false } }
    }
  }
});

// ── TABELA CIDADES ─────────────────────────────────────────────────────────
const cidadeData = [
  { nome: 'Jundiaí',          total: 75, invadidas: 14, nuncaTroca: 39, expostos: 70 },
  { nome: 'Itatiba',          total: 27, invadidas:  6, nuncaTroca: 12, expostos: 25 },
  { nome: 'Outros',           total: 22, invadidas:  4, nuncaTroca: 10, expostos: 21 },
  { nome: 'São Paulo',        total: 15, invadidas:  2, nuncaTroca:  7, expostos: 15 },
  { nome: 'Itupeva',          total:  6, invadidas:  1, nuncaTroca:  3, expostos:  6 },
  { nome: 'Francisco Morato', total:  6, invadidas:  0, nuncaTroca:  2, expostos:  6 },
  { nome: 'Franco da Rocha',  total:  4, invadidas:  0, nuncaTroca:  2, expostos:  4 },
];

const tbody = document.getElementById('cidadeTableBody');
cidadeData.forEach(c => {
  const pctInv  = ((c.invadidas / c.total)*100).toFixed(1);
  const pctNunca = ((c.nuncaTroca / c.total)*100).toFixed(1);
  const pctExp  = ((c.expostos / c.total)*100).toFixed(1);
  const invClass = pctInv > 20 ? 'badge-danger' : pctInv > 10 ? 'badge-warning' : 'badge-success';
  tbody.innerHTML += `
    <tr>
      <td><strong>${c.nome}</strong></td>
      <td>
        <div class="progress-bar-wrap">
          <div class="progress-bar"><div class="progress-fill" style="width:${(c.total/75*100).toFixed(0)}%"></div></div>
          <span>${c.total}</span>
        </div>
      </td>
      <td><span class="badge ${invClass}">${c.invadidas} (${pctInv}%)</span></td>
      <td><span class="badge badge-warning">${c.nuncaTroca} (${pctNunca}%)</span></td>
      <td><span class="badge badge-danger">${c.expostos} (${pctExp}%)</span></td>
    </tr>`;
});

// ── RELATOS ────────────────────────────────────────────────────────────────
const relatos = [
  { nome: 'Edivone A. S. Coatto', cidade: 'Jundiaí', idade: 68,
    texto: 'Tive uma ligação que acabei fazendo PIX, pois pensei ser minha filha. Perdi R$ 1.820,00.' },
  { nome: 'Erika Nakasone', cidade: 'Itatiba', idade: 55,
    texto: 'Vários golpes por telefone, SMS, e-mails... a pior situação quase destruiu a vida da minha mãe. Ela entregou mais de 20 mil dólares a estelionatários. A sequela ficou no psicológico por mais de 10 anos.' },
  { nome: 'Viviane Souza', cidade: 'Outros', idade: 50,
    texto: 'Hackearam meu WhatsApp. Falaram que era do Webmotors (eu estava anunciando um carro) e me pediram um código.' },
  { nome: 'Lidia Tsuru', cidade: 'Jundiaí', idade: 59,
    texto: 'Tive meu cartão de crédito clonado depois de me cadastrar no aplicativo da ZUL+. Eu achava que aplicativos eram seguros.' },
  { nome: 'Lucilene de Souza', cidade: 'Outros', idade: 43,
    texto: 'Tenho loja online. Recebi ligação dizendo ser PagSeguro, pedindo para atualizar a máquina de cartão e o código do app. Na hora percebi e desliguei.' },
  { nome: 'Amanda Góes', cidade: 'Jundiaí', idade: 25,
    texto: 'Criaram um WhatsApp usando minha foto e enviaram mensagens para conhecidos pedindo dinheiro. O golpista disse para não deixar o Facebook aberto para evitar que vejam minha lista de amigos.' },
  { nome: 'Rita Ivone Lopes', cidade: 'Jundiaí', idade: 70,
    texto: 'Fizeram pix em meu nome. Usaram minha senha, nunca a compartilhei com ninguém. Mesmo com BO na delegacia não fui ressarcida pelo banco.' },
  { nome: 'Arlete Gianulo', cidade: 'Itatiba', idade: null,
    texto: 'Vi um anúncio das Lojas Americanas ofertando um produto, comprei e era golpe. Pegaram o número do meu cartão e compraram uma passagem aérea. Fui ao banco e à polícia e consegui receber meu dinheiro.' },
  { nome: 'Jefferson H. Pinheiro', cidade: 'Jundiaí', idade: 46,
    texto: 'Logaram meu Gmail em um celular em outra cidade.' },
];

const grid = document.getElementById('relatosGrid');
relatos.forEach(r => {
  grid.innerHTML += `
    <div class="relato-card">
      <div class="relato-quote">"</div>
      <p class="relato-text">${r.texto}</p>
      <div class="relato-author">${r.nome}</div>
      <div class="relato-meta">${r.cidade}${r.idade ? ' · ' + r.idade + ' anos' : ''}</div>
    </div>`;
});

// ── GERADOR DE SENHA ───────────────────────────────────────────────────────
const opts = { upper: true, lower: true, numbers: true, symbols: true };
const chars = {
  upper: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lower: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()-_=+[]{}|;:,.<>?'
};

function updateLength() {
  const v = document.getElementById('lengthSlider').value;
  document.getElementById('lengthVal').textContent = v;
}

function toggleOpt(key) {
  const active = Object.values(opts).filter(Boolean).length;
  if (opts[key] && active === 1) return;
  opts[key] = !opts[key];
  document.getElementById('tog-' + key).classList.toggle('active', opts[key]);
  if (document.getElementById('genText').textContent !== 'Clique em Gerar Senha') generatePassword();
}

function generatePassword() {
  const len = parseInt(document.getElementById('lengthSlider').value);
  let pool = '';
  let password = '';
  // Garantir pelo menos 1 de cada tipo ativo
  Object.entries(opts).forEach(([k, v]) => { if (v) { pool += chars[k]; password += chars[k][Math.floor(Math.random()*chars[k].length)]; }});
  while (password.length < len) password += pool[Math.floor(Math.random()*pool.length)];
  password = password.split('').sort(()=>Math.random()-0.5).join('').slice(0, len);
  document.getElementById('genText').textContent = password;
  updateStrength(password);
}

function updateStrength(pwd) {
  let score = 0;
  if (pwd.length >= 12) score++;
  if (pwd.length >= 16) score++;
  if (/[A-Z]/.test(pwd) && /[a-z]/.test(pwd)) score++;
  if (/[0-9]/.test(pwd)) score++;
  if (/[^A-Za-z0-9]/.test(pwd)) score++;
  const level = score <= 2 ? 1 : score <= 3 ? 2 : score <= 4 ? 3 : 4;
  const colors = ['', '#dc2626','#d97706','#2e75b6','#16a34a'];
  const labels = ['', 'Fraca','Razoável','Boa','Muito Forte'];
  for (let i = 1; i <= 4; i++) {
    document.getElementById('s'+i).style.background = i <= level ? colors[level] : '#e8e5df';
  }
  document.getElementById('strengthLabel').textContent = labels[level];
  document.getElementById('strengthLabel').style.color = colors[level];
}

function copyPassword() {
  const pwd = document.getElementById('genText').textContent;
  if (pwd === 'Clique em Gerar Senha') return;
  navigator.clipboard.writeText(pwd).then(() => {
    const toast = document.getElementById('toast');
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 2000);
  });
}

// Gera uma senha ao carregar
window.addEventListener('load', generatePassword);



// ── TEMA ───────────────────────────────────────────────────────────────────
const html = document.documentElement;
const btn  = document.getElementById('themeToggle');

function getSystemTheme() {
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  html.setAttribute('data-theme', theme);
  btn.textContent = theme === 'dark' ? '☀️' : '🌙';
  localStorage.setItem('theme', theme);
}

function toggleTheme() {
  const current = html.getAttribute('data-theme') || getSystemTheme();
  applyTheme(current === 'dark' ? 'light' : 'dark');
}

// Ao carregar: respeita preferência salva ou usa o sistema
(function() {
  const saved = localStorage.getItem('theme');
  applyTheme(saved || getSystemTheme());
  // Observa mudanças no tema do sistema
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', e => {
    if (!localStorage.getItem('theme')) applyTheme(e.matches ? 'dark' : 'light');
  });
})();