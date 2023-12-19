<?php

use Cloudflare\Workers\Worker;

Worker::run(function () {
    // Jalankan PHP dengan menggunakan PHP-FPM
    phpinfo();
});

?>
