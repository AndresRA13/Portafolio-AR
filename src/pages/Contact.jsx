import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail, Phone, MapPin, Send, CheckCircle2, Copy, Check,
  Github, Linkedin, Sparkles, User, AtSign, FileText, MessageSquare, AlertCircle
} from 'lucide-react';

/* ── Floating Label Input ─────────────────────────────────────── */
const FloatingField = ({ id, name, label, type = 'text', value, onChange, required, placeholder, icon: Icon, delay = 0 }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      {/* Glow layer behind the field */}
      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.25 }}
            className="absolute inset-0 rounded-xl bg-blue-500/8 dark:bg-blue-400/6 blur-sm pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Icon */}
      <div className={`absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 pointer-events-none z-10
        ${focused ? 'text-blue-500 dark:text-sky-400' : 'text-gray-400 dark:text-gray-500'}`}>
        <Icon size={17} />
      </div>

      {/* Floating Label */}
      <motion.label
        htmlFor={id}
        animate={{
          top: isActive ? '8px' : '50%',
          y: isActive ? 0 : '-50%',
          fontSize: isActive ? '10px' : '13px',
          color: focused
            ? '#2563eb'
            : isActive
              ? '#6b7280'
              : '#9ca3af',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="absolute left-11 font-semibold font-mono uppercase tracking-wider pointer-events-none z-10 origin-left leading-none"
        style={{ top: '50%', transform: 'translateY(-50%)' }}
      >
        {label}{required && ' *'}
      </motion.label>

      {/* Input */}
      <input
        id={id}
        name={name}
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ''}
        className={`w-full pl-11 pr-4 pt-6 pb-2.5 rounded-xl text-sm font-medium text-gray-900 dark:text-white
          bg-white/60 dark:bg-white/5 backdrop-blur-sm outline-none transition-all duration-300
          placeholder:text-gray-300 dark:placeholder:text-gray-600 placeholder:text-xs
          border ${focused
            ? 'border-blue-500/70 dark:border-sky-500/60 shadow-lg shadow-blue-500/15 dark:shadow-sky-500/10'
            : 'border-gray-200/80 dark:border-white/10 hover:border-blue-300/60 dark:hover:border-white/20'
          }`}
      />

      {/* Animated bottom line */}
      <motion.div
        animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
        initial={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute bottom-0 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 origin-left pointer-events-none"
      />
    </motion.div>
  );
};

/* ── Floating Textarea ────────────────────────────────────────── */
const FloatingTextarea = ({ id, name, label, value, onChange, required, placeholder, icon: Icon, delay = 0 }) => {
  const [focused, setFocused] = useState(false);
  const isActive = focused || value.length > 0;
  const maxLen = 600;

  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.45, delay }}
      viewport={{ once: true }}
      className="relative"
    >
      <AnimatePresence>
        {focused && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 rounded-xl bg-blue-500/8 dark:bg-blue-400/6 blur-sm pointer-events-none"
          />
        )}
      </AnimatePresence>

      {/* Icon */}
      <div className={`absolute left-4 top-5 transition-colors duration-300 pointer-events-none z-10
        ${focused ? 'text-blue-500 dark:text-sky-400' : 'text-gray-400 dark:text-gray-500'}`}>
        <Icon size={17} />
      </div>

      {/* Floating Label */}
      <motion.label
        htmlFor={id}
        animate={{
          top: isActive ? '10px' : '22px',
          fontSize: isActive ? '10px' : '13px',
          color: focused ? '#2563eb' : isActive ? '#6b7280' : '#9ca3af',
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 24 }}
        className="absolute left-11 font-semibold font-mono uppercase tracking-wider pointer-events-none z-10 leading-none"
      >
        {label}{required && ' *'}
      </motion.label>

      <textarea
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        required={required}
        rows={5}
        maxLength={maxLen}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        placeholder={focused ? placeholder : ''}
        className={`w-full pl-11 pr-4 pt-7 pb-3 rounded-xl text-sm font-medium text-gray-900 dark:text-white
          bg-white/60 dark:bg-white/5 backdrop-blur-sm outline-none transition-all duration-300 resize-none
          placeholder:text-gray-300 dark:placeholder:text-gray-600 placeholder:text-xs
          border ${focused
            ? 'border-blue-500/70 dark:border-sky-500/60 shadow-lg shadow-blue-500/15 dark:shadow-sky-500/10'
            : 'border-gray-200/80 dark:border-white/10 hover:border-blue-300/60 dark:hover:border-white/20'
          }`}
      />

      {/* Bottom line */}
      <motion.div
        animate={{ scaleX: focused ? 1 : 0, opacity: focused ? 1 : 0 }}
        initial={{ scaleX: 0, opacity: 0 }}
        transition={{ duration: 0.3, ease: 'easeOut' }}
        className="absolute bottom-8 left-3 right-3 h-[2px] rounded-full bg-gradient-to-r from-blue-600 via-sky-500 to-cyan-400 origin-left pointer-events-none"
      />

      {/* Character counter */}
      <div className="flex justify-end mt-1.5 pr-1">
        <motion.span
          animate={{ color: value.length > maxLen * 0.85 ? '#f59e0b' : '#9ca3af' }}
          className="text-[10px] font-mono"
        >
          {value.length}/{maxLen}
        </motion.span>
      </div>
    </motion.div>
  );
};

/* ── Main Component ───────────────────────────────────────────── */
const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('idle');
  const [copiedField, setCopiedField] = useState(null);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

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
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify(formData),
      });
      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
      }
    } catch {
      setStatus('error');
    }
  };

  const isFormFilled = Object.values(formData).every(v => v.trim().length > 0);

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

          {/* ── Left: Contact info + map ── */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-5 space-y-6"
          >
            <div className="space-y-2">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Información de Contacto</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                Respondo generalmente en menos de 24 horas. Puedes escribirme por email, WhatsApp o llenar el formulario.
              </p>
            </div>

            {/* Contact Cards */}
            <div className="space-y-3">
              {[
                {
                  icon: Mail, label: 'Corro Electrónico', value: 'rojasaguileraandres13@gmail.com',
                  href: 'mailto:rojasaguileraandres13@gmail.com', color: 'blue', field: 'email',
                  copyVal: 'rojasaguileraandres13@gmail.com'
                },
                {
                  icon: Phone, label: 'Teléfono / WhatsApp', value: '+57 316 059 2599',
                  href: 'tel:+573160592599', color: 'sky', field: 'phone',
                  copyVal: '+573160592599'
                },
                {
                  icon: MapPin, label: 'Ubicación', value: 'Cajamarca, Tolima — Colombia 🇨🇴',
                  color: 'emerald', field: null
                },
              ].map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ x: 4 }}
                  className="p-4 rounded-2xl glass-card border border-gray-200/80 dark:border-white/10 flex items-center justify-between group transition-all duration-300 hover:border-blue-300/50 dark:hover:border-sky-500/30 hover:shadow-md hover:shadow-blue-500/5"
                >
                  <div className="flex items-center gap-4">
                    <motion.div
                      whileHover={{ scale: 1.1, rotate: 8 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className={`p-3 rounded-xl bg-${item.color}-500/10 text-${item.color}-600 dark:text-${item.color}-400`}
                    >
                      <item.icon size={20} />
                    </motion.div>
                    <div>
                      <div className="text-[10px] font-mono font-bold uppercase text-gray-500 dark:text-gray-400 tracking-wider">{item.label}</div>
                      {item.href ? (
                        <a href={item.href} className="text-sm font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-500 dark:hover:text-sky-400 transition-colors">
                          {item.value}
                        </a>
                      ) : (
                        <div className="text-sm font-semibold text-gray-800 dark:text-gray-200">{item.value}</div>
                      )}
                    </div>
                  </div>
                  {item.field && (
                    <motion.button
                      whileTap={{ scale: 0.85 }}
                      onClick={() => copyToClipboard(item.copyVal, item.field)}
                      className="p-2 rounded-lg hover:bg-gray-200/60 dark:hover:bg-gray-800 text-gray-400 hover:text-blue-500 dark:hover:text-sky-400 transition-colors cursor-pointer"
                      title={`Copiar ${item.label}`}
                    >
                      <AnimatePresence mode="wait">
                        {copiedField === item.field ? (
                          <motion.div key="check" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <Check size={18} className="text-emerald-500" />
                          </motion.div>
                        ) : (
                          <motion.div key="copy" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
                            <Copy size={18} />
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.button>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              viewport={{ once: true }}
              className="rounded-3xl overflow-hidden glass-card border border-gray-200/80 dark:border-white/10 shadow-lg h-60 relative"
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15915.263592881!2d-75.43153595!3d4.4402682!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e38c7f9df88f11d%3A0xc6ad50e263c965e6!2sCajamarca%2C%20Tolima!5e0!3m2!1ses!2sco!4v1707747300000!5m2!1ses!2sco"
                width="100%" height="100%"
                style={{ border: 0 }} allowFullScreen="" loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación Andrés Rojas"
                className="grayscale dark:invert-[0.9] dark:hue-rotate-180 opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </motion.div>
          </motion.div>

          {/* ── Right: Animated Form ── */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-7"
          >
            <div className="glass-card p-8 sm:p-10 rounded-3xl border border-gray-200/80 dark:border-white/10 shadow-2xl relative overflow-hidden">

              {/* Decorative background glow */}
              <div className="absolute -top-20 -right-20 w-56 h-56 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
              <div className="absolute -bottom-16 -left-16 w-48 h-48 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

              {/* Form header */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="mb-8 relative"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 rounded-xl bg-gradient-to-tr from-blue-700 to-sky-500 text-white shadow-md shadow-blue-500/30">
                    <MessageSquare size={18} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Envíame un Mensaje</h3>
                </div>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 pl-1">
                  Completa el formulario y me pondré en contacto contigo a la brevedad posible.
                </p>
              </motion.div>

              <form onSubmit={handleSubmit} className="space-y-5 relative">

                {/* Row: Nombre + Email */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <FloatingField
                    id="name" name="name" label="Tu Nombre" type="text"
                    value={formData.name} onChange={handleChange} required
                    placeholder="Ej. Juan Pérez" icon={User} delay={0.1}
                  />
                  <FloatingField
                    id="email" name="email" label="Correo" type="email"
                    value={formData.email} onChange={handleChange} required
                    placeholder="tu@email.com" icon={AtSign} delay={0.15}
                  />
                </div>

                {/* Asunto */}
                <FloatingField
                  id="subject" name="subject" label="Asunto" type="text"
                  value={formData.subject} onChange={handleChange} required
                  placeholder="Ej. Desarrollo de sitio web / Consulta" icon={FileText} delay={0.2}
                />

                {/* Mensaje */}
                <FloatingTextarea
                  id="message" name="message" label="Mensaje"
                  value={formData.message} onChange={handleChange} required
                  placeholder="Detalla tu idea o requerimiento aquí..." icon={MessageSquare} delay={0.25}
                />

                {/* Progress dots — visual feedback on completion */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  className="flex items-center gap-2 px-1"
                >
                  {['name', 'email', 'subject', 'message'].map((field) => (
                    <motion.div
                      key={field}
                      animate={{
                        backgroundColor: formData[field].length > 0 ? '#2563eb' : '#e5e7eb',
                        scale: formData[field].length > 0 ? 1.2 : 1,
                      }}
                      transition={{ duration: 0.3 }}
                      className="w-2 h-2 rounded-full"
                    />
                  ))}
                  <span className="text-[10px] font-mono text-gray-400 dark:text-gray-500 ml-1">
                    {Object.values(formData).filter(v => v.trim().length > 0).length}/4 campos completados
                  </span>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={status === 'submitting'}
                  whileHover={status !== 'submitting' ? { scale: 1.015, y: -1 } : {}}
                  whileTap={status !== 'submitting' ? { scale: 0.97 } : {}}
                  className={`relative w-full py-4 rounded-xl font-bold text-base text-white overflow-hidden
                    bg-gradient-to-r from-blue-700 via-blue-600 to-sky-500
                    shadow-xl shadow-blue-500/30 transition-shadow duration-300 cursor-pointer
                    flex items-center justify-center gap-2
                    ${status === 'submitting' ? 'opacity-75 cursor-not-allowed' : 'hover:shadow-blue-500/50'}`}
                >
                  {/* Shimmer overlay */}
                  {status !== 'submitting' && (
                    <motion.div
                      initial={{ x: '-100%', skewX: '-15deg' }}
                      animate={{ x: '250%' }}
                      transition={{ duration: 2.5, repeat: Infinity, repeatDelay: 1.5, ease: 'easeInOut' }}
                      className="absolute inset-0 w-1/3 bg-white/20 pointer-events-none"
                    />
                  )}

                  <AnimatePresence mode="wait">
                    {status === 'submitting' ? (
                      <motion.span
                        key="loading"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2 font-mono"
                      >
                        <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                        </svg>
                        Enviando Mensaje...
                      </motion.span>
                    ) : (
                      <motion.span
                        key="send"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -8 }}
                        className="flex items-center gap-2"
                      >
                        <motion.div
                          animate={isFormFilled ? { x: [0, 3, 0], rotate: [0, -15, 0] } : {}}
                          transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 2 }}
                        >
                          <Send size={18} />
                        </motion.div>
                        Enviar Mensaje
                      </motion.span>
                    )}
                  </AnimatePresence>
                </motion.button>

                {/* Status Messages */}
                <AnimatePresence>
                  {status === 'success' && (
                    <motion.div
                      key="success"
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10, scale: 0.96 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 font-bold text-sm flex items-center gap-3"
                    >
                      <motion.div
                        initial={{ scale: 0, rotate: -90 }}
                        animate={{ scale: 1, rotate: 0 }}
                        transition={{ delay: 0.1, type: 'spring', stiffness: 400 }}
                      >
                        <CheckCircle2 size={22} />
                      </motion.div>
                      <div>
                        <div>¡Mensaje recibido con éxito!</div>
                        <div className="text-xs font-normal text-emerald-500/80 dark:text-emerald-400/70 mt-0.5">Te responderé en menos de 24 horas.</div>
                      </div>
                    </motion.div>
                  )}
                  {status === 'error' && (
                    <motion.div
                      key="error"
                      initial={{ opacity: 0, y: 12, scale: 0.96 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
                      className="p-4 rounded-xl bg-red-500/10 border border-red-500/30 text-red-600 dark:text-red-400 font-bold text-sm flex items-center gap-3"
                    >
                      <AlertCircle size={20} className="shrink-0" />
                      <span>Hubo un problema al enviar. Intenta de nuevo o escríbeme directamente al correo.</span>
                    </motion.div>
                  )}
                </AnimatePresence>

              </form>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Contact;

