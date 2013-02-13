<?php
/**
 * La configuration de base de votre installation WordPress.
 *
 * Ce fichier contient les réglages de configuration suivants : réglages MySQL,
 * préfixe de table, clefs secrètes, langue utilisée, et ABSPATH.
 * Vous pouvez en savoir plus à leur sujet en allant sur 
 * {@link http://codex.wordpress.org/Editing_wp-config.php Modifier
 * wp-config.php} (en anglais). C'est votre hébergeur qui doit vous donner vos
 * codes MySQL.
 *
 * Ce fichier est utilisé par le script de création de wp-config.php pendant
 * le processus d'installation. Vous n'avez pas à utiliser le site web, vous
 * pouvez simplement renommer ce fichier en "wp-config.php" et remplir les
 * valeurs.
 *
 * @package WordPress
 */

// ** Réglages MySQL - Votre hébergeur doit vous fournir ces informations. ** //
/** Nom de la base de données de WordPress. */
define('DB_NAME', 'intuisens');

/** Utilisateur de la base de données MySQL. */
define('DB_USER', 'root');

/** Mot de passe de la base de données MySQL. */
define('DB_PASSWORD', 'root');

/** Adresse de l'hébergement MySQL. */
define('DB_HOST', 'localhost');

/** Jeu de caractères à utiliser par la base de données lors de la création des tables. */
define('DB_CHARSET', 'utf8');

/** Type de collation de la base de données. 
  * N'y touchez que si vous savez ce que vous faites. 
  */
define('DB_COLLATE', '');

/**#@+
 * Clefs uniques d'authentification et salage.
 *
 * Remplacez les valeurs par défaut par des phrases uniques !
 * Vous pouvez générer des phrases aléatoires en utilisant 
 * {@link https://api.wordpress.org/secret-key/1.1/salt/ le service de clefs secrètes de WordPress.org}.
 * Vous pouvez modifier ces phrases à n'importe quel moment, afin d'invalider tous les cookies existants.
 * Cela forcera également tous les utilisateurs à se reconnecter.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         '44&~I5JJfkgghd?G@dpD8y^8ZQ8Lhovd^i0tS%rEU$)6]TN03)t-V4Q.`:#RL~ A');
define('SECURE_AUTH_KEY',  'qC@8G.W]8fQ`.B>P-T~y~3((TAx3`tUps>wrLfn4S1cn8MO W%.C/E>p%|aBy+^A');
define('LOGGED_IN_KEY',    'ZQK0B!U`BE[{Pl{anG[)o]@yT|;0|-yQIJs6f+$HKz,0~cJ6-E0Re|jreuw1Kkhl');
define('NONCE_KEY',        'N/gIyYox;hdbe&%r)!V@i%Nf&T<~;}gxJrN )g=I?p_e-thn*r3<r>krGep%*}NZ');
define('AUTH_SALT',        'RBsOR2uHEHZcp!-;#|si9K{YB#k47.`g) ~R`QIl`Zh},_S}8{ zYcLzOyS/AWlM');
define('SECURE_AUTH_SALT', 'V%HT+pu5HAdv}o7jyJ(_uN@IT8+fo~LI/F2VlTh&<{#7;/0}UU.];FR{)WM4^+O%');
define('LOGGED_IN_SALT',   '[Yq$a-uT<feft/zhud<LgIY[X<}v}7`X,ts|]X5zB[Zg{AkUl27m42TH/wCI|#]x');
define('NONCE_SALT',       '})7X-Pr1k{H9vuT|DQY3(`91fc$.FpMAsUaw3-|$!acLWQFa-p!$5Ly^UUu3eG9L');
/**#@-*/

/**
 * Préfixe de base de données pour les tables de WordPress.
 *
 * Vous pouvez installer plusieurs WordPress sur une seule base de données
 * si vous leur donnez chacune un préfixe unique. 
 * N'utilisez que des chiffres, des lettres non-accentuées, et des caractères soulignés!
 */
$table_prefix  = 'wp_';

/**
 * Langue de localisation de WordPress, par défaut en Anglais.
 *
 * Modifiez cette valeur pour localiser WordPress. Un fichier MO correspondant
 * au langage choisi doit être installé dans le dossier wp-content/languages.
 * Par exemple, pour mettre en place une traduction française, mettez le fichier
 * fr_FR.mo dans wp-content/languages, et réglez l'option ci-dessous à "fr_FR".
 */
define('WPLANG', 'fr_FR');

/** 
 * Pour les développeurs : le mode deboguage de WordPress.
 * 
 * En passant la valeur suivante à "true", vous activez l'affichage des
 * notifications d'erreurs pendant votre essais.
 * Il est fortemment recommandé que les développeurs d'extensions et
 * de thèmes se servent de WP_DEBUG dans leur environnement de 
 * développement.
 */ 
define('WP_DEBUG', false); 

/* C'est tout, ne touchez pas à ce qui suit ! Bon blogging ! */

/** Chemin absolu vers le dossier de WordPress. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Réglage des variables de WordPress et de ses fichiers inclus. */
require_once(ABSPATH . 'wp-settings.php');