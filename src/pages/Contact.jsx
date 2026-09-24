import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check, 
  Github, Linkedin, Twitter, Sparkles, MessageSquare, Clock 
} from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [status, setStatus] = useState('idle'); // 'idle', 'submitting', 'success', 'error'
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const copyToClipboard = (text, field) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2500);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');

    try {
      const response = await fetch('https://formspree.io/f/mjgeygqa', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setStatus('error');
    }
  };

  return (
    <section className="min-h-screen py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <span className="px-4 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-cyan-400 text-xs font-bold font-mono tracking-wider uppercase border border-blue-500/20">
            Hablemos
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-gray-900 dark:text-white">
            Ponte en <span className="text-gradient-primary">Contacto</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-base sm:text-lg">
            ¿Tienes un proyecto en mente, deseas una cotización o quieres explorar colaboraciones? Estoy listo para responderte.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Contact Information & Map */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-8"
          >
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                Información de Contacto
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Respondo generalmente en menos de 24 horas. Puedes escribirme por email, WhatsApp o llenar el formulario.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-4">
              
              {/* Email Card */}
              <div className="p-4 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-600 dark:text-cyan-400">
                    <Mail size={22} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase text-gray-500 dark:text-gray-400">Correo Electrónico</div>
                    <a href="mailto:rojasaguileraandres13@gmail.com" className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500">
                      rojasaguileraandres13@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('rojasaguileraandres13@gmail.com', 'email')}
                  className="p-2 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800 text-gray-500 hover:text-blue-500 transition-colors cursor-pointer"
                  title="Copiar correo"
                >
                  {copiedField === 'email' ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Phone Card */}
              <div className="p-4 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 flex items-center justify-between group">
                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400">
                    <Phone size={22} />
                  </div>
                  <div>
                    <div className="text-[11px] font-mono font-bold uppercase text-gray-500 dark:text-gray-400">Teléfono / WhatsApp</div>
                    <a href="tel:+573138850922" className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-purple-500">
                      +57 313 885 0922
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard('+573138850922', 'phone')}
                  className="p-2 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800 text-gray-500 hover:text-purple-500 transition-colors cursor-pointer"
                  title="Copiar teléfono"
                >
                  {copiedField === 'phone' ? <Check size={18} className="text-emerald-500" /> : <Copy size={18} />}
                </button>
              </div>

              {/* Location Card */}
              <div className="p-4 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 flex items-center gap-4">
                <div className="p-3 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                  <MapPin size={22} />
                </div>
                <div>
                  <div className="text-[11px] font-mono font-bold uppercase text-gray-500 dark:text-gray-400">Ubicación</div>
                  <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">
                    Cajamarca, Tolima — Colombia 🇨🇴
                  </div>
                </div>
              </div>

            </div>

            {/* Google Map Box */}
            <div className="rounded-3xl overflow-hidden glass-card border border-gray-200/80 dark:border-white/10 shadow-lg h-64 relative">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.263592881!2d-75.43153595!3d4.4402682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c7f9df88f11d%3A0xc6ad50e263c965e6!2sCajamarca%2C%20Tolima!5e0!3m2!1ses!2sco!4v1707747300000!5m2!1ses!2sco" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Andrés Rojas"
                className="grayscale dark:invert-[0.9] dark:hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity duration-500"
              ></iframe>
            </div>

          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7 glass-card p-8 sm:p-10 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-2xl relative"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Envíame un Mensaje
            </h3>
            <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-8">
              Completa el formulario y me pondré en contacto contigo a la brevedad posible.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-mono font-bold uppercase text-gray-700 dark:text-gray-300">
                    Tu Nombre *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Ej. Juan Pérez"
                    className="w-full px-4 py-3.5 rounded-xl glass-card border border-gray-200/80 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-mono font-bold uppercase text-gray-700 dark:text-gray-300">
                    Tu Correo Electrónico *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="tu@email.com"
                    className="w-full px-4 py-3.5 rounded-xl glass-card border border-gray-200/80 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-mono font-bold uppercase text-gray-700 dark:text-gray-300">
                  Asunto *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Desarrollo de sitio web / Consulta"
                  className="w-full px-4 py-3.5 rounded-xl glass-card border border-gray-200/80 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-mono font-bold uppercase text-gray-700 dark:text-gray-300">
                  Mensaje *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Detalla tu idea o requerimiento aquí..."
                  className="w-full px-4 py-3.5 rounded-xl glass-card border border-gray-200/80 dark:border-white/10 text-sm text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={status === 'submitting'}
                className={`w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-bold text-base shadow-xl shadow-blue-500/30 hover:shadow-blue-500/50 hover:scale-[1.01] active:scale-95 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
                  status === 'submitting' ? 'opacity-75 cursor-not-allowed' : ''
                }`}
              >
                {status === 'submitting' ? (
                  <span className="flex items-center gap-2 font-mono">
                    <svg className="animate-spin h-5 w-5 text-white" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                    </svg>
                    Enviando Mensaje...
                  </span>
                ) : (
                  <>
                    <Send size={18} />
                    <span>Enviar Mensaje</span>
                  </>
                )}
              </button>

              <AnimatePresence>
                {status === 'success' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 text-center font-bold text-sm flex items-center justify-center gap-2"
                  >
                    <CheckCircle2 size={18} />
                    <span>¡Mensaje recibido con éxito! Te responderé pronto.</span>
                  </motion.div>
                )}

                {status === 'error' && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 text-center font-bold text-sm"
                  >
                    Hubo un problema al enviar. Intenta de nuevo o escríbeme directamente al correo.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Contact;
