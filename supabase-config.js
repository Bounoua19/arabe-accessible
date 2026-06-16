/* ════════════════════════════════════════════════════════════
   Configuration Supabase — L'Arabe Accessible
   La clé ci-dessous est la clé PUBLIQUE (publishable) : elle est
   conçue pour être visible dans le code. La vraie sécurité vient
   des règles de la base (Row Level Security) configurées dans Supabase.
   Ne mettez JAMAIS ici la clé "service_role" / "secret".
   ════════════════════════════════════════════════════════════ */
const SUPABASE_URL = 'https://lpvxrjvetutfsosqiyht.supabase.co';
const SUPABASE_KEY = 'sb_publishable_M6g9NV9WNlSGBFJKi7sCeA_YHzTu4eu';

// Clé PUBLIQUE Stripe (sans danger, faite pour être visible). Mode test pour l'instant.
// Pour passer en réel : remplacez par votre clé pk_live_...
const STRIPE_PUBLISHABLE_KEY = 'pk_test_51TixfbEaRMtm6vUxRx8Kgam7HITXd10fuzvPv5DUKt3krpjb8nG64h9SdXk9UiY99Zm8vo7NYzLrFUbMNB2utTdr00kTf97Vtw';

// Client Supabase global (window.supabase vient du script CDN chargé avant)
const sb = window.supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// Traduction des messages d'erreur courants en français
function traduireErreurAuth(m){
  if(!m) return "Une erreur est survenue.";
  if(/Invalid login credentials/i.test(m)) return "Email ou mot de passe incorrect.";
  if(/Email not confirmed/i.test(m)) return "Veuillez d'abord confirmer votre adresse email (lien reçu par mail).";
  if(/User already registered/i.test(m)) return "Un compte existe déjà avec cette adresse email.";
  if(/Password should be at least/i.test(m)) return "Le mot de passe doit contenir au moins 6 caractères.";
  if(/rate limit|too many/i.test(m)) return "Trop de tentatives. Réessayez dans quelques minutes.";
  if(/Unable to validate email/i.test(m)) return "Adresse email invalide.";
  return "Erreur : " + m;
}
