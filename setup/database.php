<?php if (!defined('BASEPATH')) exit('No direct script access allowed');

$active_group = 'expressionengine';
$active_record = TRUE;

/* All connections are forced temporarily to db1. */
$db['expressionengine']['hostname'] = '127.0.0.1';
$db['expressionengine']['username'] = 'root';
$db['expressionengine']['password'] = '1111';
$db['expressionengine']['database'] = 'hhcee';
$db['expressionengine']['dbdriver'] = 'mysqli';
$db['expressionengine']['pconnect'] = FALSE;
$db['expressionengine']['dbprefix'] = 'exp_';
$db['expressionengine']['swap_pre'] = 'exp_';
$db['expressionengine']['db_debug'] = TRUE;
$db['expressionengine']['cache_on'] = FALSE;
$db['expressionengine']['autoinit'] = FALSE;
$db['expressionengine']['char_set'] = 'utf8';
$db['expressionengine']['dbcollat'] = 'utf8_general_ci';
$db['expressionengine']['cachedir'] = '/var/www/ee.healthyhomecompany.com/public/system/expressionengine/cache/db_cache/';

/* End of file database.php */
/* Location: ./system/expressionengine/config/database.php */ 
