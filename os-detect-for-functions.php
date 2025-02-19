function adicionar_script_deteccao() {
    wp_enqueue_script('detectar-sistema-browser', get_template_directory_uri() . '/js/detectar.js', array(), null, true);
}
add_action('wp_enqueue_scripts', 'adicionar_script_deteccao');
