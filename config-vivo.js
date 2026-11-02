// Configuración de la guía en vivo (datos públicos: no contiene secretos)
window.VIVO = {
  SUPABASE_URL: "https://mzxewusumcmgdujzbcdc.supabase.co",
  SUPABASE_KEY: "sb_publishable_Se18ZKgk8DtlGb9tyjbadA_uJmEnrG3",
  CANAL: "dmca-division-frecuencia",
  // Clave pública: la guía solo acepta cambios de lámina firmados por el expositor (_privado/CLAVE_EXPOSITOR.txt)
  CLAVE_PUBLICA: {"kty":"EC","crv":"P-256","x":"vOtl-kTl5S-mwSey8r5aVF2V56GUftZCQRMOEeol-yI","y":"_dofTvXSieVFc17p_kmQJm0CKirddZ9yw0pnn1gHC-g"},
  // Clave del expositor cifrada con la contraseña (PBKDF2 + AES-GCM); el expositor la destraba una vez por computadora
  CLAVE_CIFRADA: {"iter":310000,"salt":"RknQnzy0IgpX+5rTgKraXA==","iv":"9fhNGbpvBbaimgrK","ct":"AboJVMCPQmUc4STUf9K8tMbUxvpKcBe+wlqnTDPLOt4vzoYCYShfHQkYTmFmg1DLPbO2sVLW6rVrCf7irRscEqZrBCNpDlb0oMtyG2fnEsVTAATCu3gq5xncdLC2d7WKCWDqVKJLRbwsHm23TS4cuIORBmb4RrHqLIPCZsVOLOCWoqsen38Jf3zE+U62a0Wo+xdbW002HB7Qir2yHz4VSKk4qHa4oA2s4nYyoM/A68HEg8HOWbRw5Ea4IjO4fe4fLE5IcLRIsRjry8SCcy7oGagsqquvhCQRS262OG3/"},
  // Vacío: el QR apunta a guia.html junto a la presentación publicada. Completar si la guía se publica en otro lado.
  URL_GUIA: ""
};
