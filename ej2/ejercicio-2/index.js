const Logger = require("./node_modules/logplease");
const logger = Logger.create('utils');

logger.debug ( `Hola mundo de Node` ) ;
console.log ( `Noticias de última hora, Node.js me encta!!` ) ;
logger.info ( `Noticias de última hora, Node.js me encta!!` ) ;
logger.warn ( `Tirando warnings como campeones` ) ;
logger.error ( `Algo no está bien!!!` ) ;