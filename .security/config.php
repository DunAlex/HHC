<?php

/* Define global variables. */
if (!defined("HHC_CORE")) {
    define('HHC_CORE', true);
}

/* Set the default date to be used across the whole code base. */
date_default_timezone_set("UTC");

define('DB_HOST', '127.0.0.1');
define('DB_USER', 'root');
define('DB_PASS', '1111');
define('DB_NAME', 'healthyhome');

define('DB_LOGGER_HOST', '127.0.0.1');
define('DB_LOGGER_NAME', 'logger');
define('DB_LOGGER_USER', 'root');
define('DB_LOGGER_PASSWORD', '1111');

define('MAILGUN_KEY', 'key-8df44f888ac044a680ff0ab8a9382650');
define('MAILGUN_DOMAIN', 'sandbox23e0a689704941c49e61c3dda8e93b89.mailgun.org');
define('MAILGUN_DISPATCHER', 'HHC Email System <some@email.org>');

define('ENC_FIELDS', serialize(array("Password", "CreditCardNumber", "CCNumber", "TaxId")));
define('ENCRYPTION_KEY', 'f359773ccc036399fb427bc537ecb26');

define('DB_API_HOST', '127.0.0.1');
define('DB_API_NAME', 'api');
define('DB_API_USER', 'root');
define('DB_API_PASSWORD', '1111');

define('PAYONEER_REDIRECT_URL', 'https://www.membertek.com/mommysclub/bfc/bfc-payoneer-complete.php');
define('PAYONEER_URL', "https://api.payoneer.com/payouts/HttpAPI/API.aspx");
define('PAYONEER_METHOD_GETTOKEN', 'GetToken');
define('PAYONEER_METHOD_GETPAYEEDETAILS', 'GetPayeeDetails');

define('PAYONEER_USERNAME', 'MomlubGG5');
define('PAYONEER_PASSWORD', '12lghjf54DD');
define('PAYONEER_PARTNERID', '100035850');

/* Healthy Home Database Access. */
define('DB_HHC_HOST', 'localhost'); /* Server IPV4. */
define('DB_HHC_NAME', 'healthyhome'); /* The database name. */
define('DB_HHC_USER', 'root'); /* The username used for logging into the database. */
define('DB_HHC_PASSWORD', '1111'); /* The password used for logging into the database */