var GAME_LEVELS = [
  ["                                                         ",
   "                                                         ",
   "                                                         ",
   "                                                         ",
   "                                                         ",
   "                                                         ",
   "                                                         ",
   "                                                         ",
   "                                                     xx  ",
   "                                                      x  ",
   "                                                      x  ",
   "  xx                                                  x  ",
   "  x                                 o   o     o     o x  ",
   "  x                                                   x  ",
   "  x                                                   x  ",
   "  x  @      o                                         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxx  ",
   "                             x     x                     ",
   "                             x!!!!!x                     ",
   "                             x!!!!!x                     ",
   "                             xxxxxxx                     ",
   "                                                         ",
   "                                                         "],
  ["                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                                ",
   "                                                                  xxx           ",
   "                                                   xx      xx    xx!xx          ",
   "                                    o o      xx                  x!!!x          ",
   "                                                                 xx!xx          ",
   "                                   xxxxx                          xvx           ",
   "                                                                            xx  ",
   "  xx                                      o o                                x  ",
   "  x                     o                                                    x  ",
   "  x                                      xxxxx                             o x  ",
   "  x          xxxx       o                                                    x  ",
   "  x  @       x  x                                                xxxxx       x  ",
   "  xxxxxxxxxxxx  xxxxxxxxxxxxxxx   xxxxxxxxxxxxxxxxxxxx     xxxxxxx   xxxxxxxxx  ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              x!!!x                  x!!!!!x                    ",
   "                              xxxxx                  xxxxxxx                    ",
   "                                                                                ",
   "                                                                                "],
  ["                                                                               xx  ",
   "                                                                                x  ",
   "                                                                                x  ",
   "                                                                      g g       x  ",
   "                                                                                x  ",
   "                                                                                x  ",
   "                                                                                x  ",
   "                                                                 o            o x  ",
   "                             g                                               xxxx  ",
   "                                                                                x  ",
   "                                                                xxx             x  ",
   "                  o   o                              xxx                        x  ",
   "                 xxxxxxxxx                           xvx                xx      x  ",
   "                 x       x        g                                 gg        o x  ",
   "  xx             x       x   o                                                  x  ",
   "  x             ox       x                    o                              xxxx  ",
   "  x            xxx       x                                    o              x     ",
   "  x            x         x   o               xxx                            xx     ",
   "  x           ox         x                                                  x      ",
   "  x          xxx         x                                                 xx      ",
   "  x  @      ox           x   o                                             x       ",
   "  xxxxxxxxxxxx           xxxxxxxx   xxxxxxxx      xxxxxxxxx      xxxxxxxxxxx       ",
   "                                x   x      x      x       x!!!!!!x                 ",
   "                                x!!!x      x!!!!!!x       x!!!!!!x                 ",
   "                                x!!!x      x!!!!!!x       x!!!!!!x                 ",
   "                                xxxxx      xxxxxxxx       xxxxxxxx                 ",
   "                                                                                   ",
   "                                                                                   "],
  ["                                      x!!x                        xxxxxxx                                    x!x  ",
   "                                      x!!x                     xxxx     xxxx                                 x!x  ",
   "                                      x!!xxxxxxxxxx           xx           xx                                x!x  ",
   "                                      xx!!!!!!!!!!xx         xx             xx                               x!x  ",
   "                                       xxxxxxxxxx!!x         x                                    o   o   o  x!x  ",
   "                                                xx!x         x     o   o                                    xx!x  ",
   "                                                 x!x         x                                xxxxxxxxxxxxxxx!!x  ",
   "                                                 xvx         x     x   x                        !!!!!!!!!!!!!!xx  ",
   "                                                             xx  |   |   |  xx            xxxxxxxxxxxxxxxxxxxxx   ",
   "                                                              xx!!!!!!!!!!!xx            v                        ",
   "                                                               xxxx!!!!!xxxx                                      ",
   "                                               x     x            xxxxxxx        xxx         xxx                  ",
   "                                               x     x                           x x         x x                  ",
   "                                               x     x                             x         x                    ",
   "                                               x     x                             xx        x                    ",
   "                                               xx    x                             x         x                    ",
   "                                               x     x      o  o     x   x         x         x                    ",
   "               xxxxxxx        xxx   xxx        x     x               x   x         x         x                    ",
   "              xx     xx         x   x          x     x     xxxxxx    x   x   xxxxxxxxx       x                    ",
   "             xx       xx        x o x          x    xx               x   x   x               x                    ",
   "     @       x         x        x   x          x     x               x   x   x               x                    ",
   "    xxx      x         x        x   x          x     x               x   xxxxx   xxxxxx      x                    ",
   "    x x      x         x       xx o xx         x     x               x     o     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!!xx     xx!!!!!!!!xx    x!!!!!!!!!!     x     =     x x         x                    ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxx     x!!!!!!!xx!     xxxxxxxxxxxxx xx  o o  xx                    ",
   "!!!!x x!!!!!!x         x!!!!!x    o                 xx!!!!!!xx !                    xx     xx                     ",
   "!!!!x x!!!!!!x         x!!!!!x                     xx!!!!!!xx  !                     xxxxxxx                      ",
   "!!!!x x!!!!!!x         x!!!!!xx       xxxxxxxxxxxxxx!!!!!!xx   !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!xxxxxxxxx!!!!!!!!!!!!!!!!!!xx    !                                                  ",
   "!!!!x x!!!!!!x         x!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!xx     !                                                  "],
   ["                                                                                                           ",
   "                                                                                                           ",
   "                                                                                                           ",
   "             v                                                                                             ",
   "                                v                                               v                          ",
   "                                                       v                               v                   ",
   "                         v                                 v          v                                x   ",
   "          v    v                     vv       v       v              v                     v            x  ",
   "        v         vv    v    vv  v           v v                                                        x  ",
   "            v          v                        v                 vv          v v             v         x  ",
   "                      v                                    v                             vv v           x  ",
   "                             v      v                v vv              v       v                        x  ",
   "              v                  v                                   v      v     v               vv v  x  ",
   "          v                  v                 v          v                            vv               x  ",
   "                  v                   vv     v        v                            v             v      x  ",
   "        v     v                                               v                                         x  ",
   "  xx                                      v                                 v           v    v          x  ",
   "  x                      v                                                                              x  ",
   "  x                                                                                                     x  ",
   "  x                                                                                                     x  ",
   "  x  @                                                                                                o x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                           ",
   "                                                                                                           ",
   "                                                                                                           ",
   "                                                                                                           "],
  ["                                                                                                                           ",
   "                                                                                                                           ",
   "                                                                                             o                             ",
   "                                                                                     o                                     ",
   "                                                                                           xxxx                            ",
   "                                                                                           x                               ",
   "         xxx                                                                        xxxxx  x                               ",
   "         xvx                                                                        x      x                               ",
   "         xvx                                                                        x      x                               ",
   "                                                                                    x o    x                               ",
   "                      o        g                                               g    xxxxxx x                               ",
   "                     xxx                           xx                o            g x      x                               ",
   "                                                   x                                x   o  x   xx                          ",
   "xx                                     o           x                 x              x xxxxxx                               ",
   "x             o                                    x          o                     x      x                               ",
   "x           xxx xx                                ox                     x          x  o   x                               ",
   "x           x    xxxxxxxx           xxxxxxx    xxxxx xx       x          x          xxxxxx x                              x",
   "x           x           x!!         x     x    x      x                  x          x      x                              x",
   "x @ #       x#    o     x!! o       x  o  x ## xo     x!!!!!!!!!!!!!!!!!!x ##  o    x   o  x!!!!!!  !!!!!!!!!!!!!!!!!!!!!!x",
   "xxxxxxx xxxxxxxxxxxxxxx x!!xxxx xxxxx xxx xxxxxxxxx xxxxxxxxxxxxxxxxxxxxxxxxxxxxx xxx xxxxxxxxxxxx  xxxxxxxxxxxxxxxxxxxxxxx",
   "xo        x!  o          !!            x!     o o   x                           x     x! o                                x",
   "xo        x! o o         !!         o  x!      o    x                           x ooo x! o        oo                     ox",
   "xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx                           xxxxxxxxxxxxxx  xxxxxx xxx  x  xxx  xx  xxx",
   "                                                                                             x     o    x                 x",
   "                                                                                             x    o o   x!!!!!!!!!!!!!!!!!x",
   "                                                                                             xxxxxxxxxxxxxxxxxxxxxxxxxxxxxx"],
  ["                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                        o                                                                     ",
   "                                                                                                              ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                        x                                                                     ",
   "                                       xxx                                                                    ",
   "                                       x x                 !!!        !!!  xxx                                ",
   "                                       x x                 !x!        !x!                                     ",
   "                                     xxx xxx                x          x                                      ",
   "                                      x   x                 x   oooo   x       xxx                            ",
   "                                      x   x                 x          x      x!!!x                           ",
   "                                      x   x                 xxxxxxxxxxxx       xxx                            ",
   "                                     xx   xx      x   x      x                                                ",
   "                                      x   xxxxxxxxx   xxxxxxxx              x x                               ",
   "                                      x   x           x                    x!!!x                              ",
   "                                      x   x           x                     xxx                               ",
   "                                     xx   xx          x                                                       ",
   "                                      x   x= = = =    x            xxx                                        ",
   "                                      x   x           x           x!!!x                                       ",
   "                                      x   x    = = = =x     o      xxx       xxx                              ",
   "                                     xx   xx          x                     x!!!x                             ",
   "                              o   o   x   x           x     x                xxv        xxx                   ",
   "                                      x   x           x              x                 x!!!x                  ",
   "                             xxx xxx xxx xxx     o o  x!!!!!!!!!!!!!!x                   vx                   ",
   "                             x xxx x x xxx x          x!!!!!!!!!!!!!!x                                        ",
   "                             x             x   xxxxxxxxxxxxxxxxxxxxxxx                                        ",
   "                             xx           xx                                         xxx                      ",
   "  xxx                         x     x     x                                         x!!!x                xxx  ",
   "  x x                         x    xxx    x                                          xxx                 x x  ",
   "  x                           x    xxx    xxxxxxx                        xxxxx                             x  ",
   "  x                           x           x                              x   x                             x  ",
   "  x                           xx          x                              x x x                             x  ",
   "  x                                       x       |xxxx|    |xxxx|     xxx xxx                             x  ",
   "  x                xxx             o o    x                              x         xxx                     x  ",
   "  x               xxxxx       xx          x                             xxx       x!!!x          x         x  ",
   "  x               oxxxo       x    xxx    x                             x x        xxx          xxx        x  ",
   "  x                xxx        xxxxxxxxxxxxx  x oo x    x oo x    x oo  xx xx                    xxx        x  ",
   "  x      @          x         x           x!!x    x!!!!x    x!!!!x    xx   xx                    x         x  ",
   "  xxxxxxxxxxxxxxxxxxxxxxxxxxxxx           xxxxxxxxxxxxxxxxxxxxxxxxxxxxx     xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx  ",
   "                                                                                                              ",
   "                                                                                                              "],
  ["                                                                ",
   "                                                                ",
   "                                                                ",
   "                                                                ",
   "                                             g                  ",
   "                            x                                   ",
   "                                                                ",
   "                                                                ",
   "                                   x                            ",
   "                                                                ",
   "                     o                                          ",
   "                     x          g                               ",
   "                                         x       x              ",
   "           o                                                    ",
   "                                                                ",
   "xx        xxx                                 g       o         ",
   "x                                                     x         ",
   "x      o           o                                            ",
   "x                                                               ",
   "x              xxx      o                                       ",
   "x                                o               xx             ",
   "x @          g         xxx      xxx                             ",
   "xxxxx                                                           ",
   "         xx        o                     xx                     ",
   "                                                                ",
   "                   o                                            ",
   "                          xxx                                   ",
   "                                     xx                         ",
   "                        g                                       ",
   "                  xxx                                           ",
   "                                                                ",
   "                                x                               ",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!"],
  ["                                                                                                  xxx x       ",
   "                                                                                                      x       ",
   "                                                                                                  xxxxx       ",
   "                                                                                                  x           ",
   "                                                                                                  x xxx       ",
   "                          o                                                                       x x x       ",
   "                                                                                             o o oxxx x       ",
   "                   xxx                                                                                x       ",
   "       !  o  !                                                xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxx       ",
   "       x     x                                                x   x x   x x   x x   x x   x x   x x           ",
   "       x= o  x            x                                   xxx x xxx x xxx x xxx x xxx x xxx x xxxxx       ",
   "       x     x                                                  x x   x x   x x   x x   x x   x x     x       ",
   "       !  o  !            o                                  xxxx xxxxx xxxxx xxxxx xxxxx xxxxx xxxxxxx       ",
   "                                                                                                              ",
   "          o              xxx                              xx                                                  ",
   "                                                                                                              ",
   "                                                                                                              ",
   "                                                      xx                                                      ",
   "                   xxx         xxx                                                                            ",
   "                                                                                                              ",
   "                          o                                                     x      x                      ",
   "                                                          xx     xx                                           ",
   "             xxx         xxx         xxx                                 x                  x                 ",
   "                                                                                                              ",
   "                                                                 ||                                           ",
   "  xxxxxxxxxxx                                                                                                 ",
   "  x         x o xxxxxxxxx o xxxxxxxxx o xx                                                x                   ",
   "  x         x   x       x   x       x   x                 ||                  x     x                         ",
   "  x  @      xxxxx   o   xxxxx   o   xxxxx                                                                     ",
   "  xxxxxxx                                     xxxxx       xx     xx     xxx                                   ",
   "        x=                  =                =x   x                     xxx                                   ",
   "        xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx   x!!!!!!!!!!!!!!!!!!!!!xxx!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!",
   "                                                  xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx",
   "                                                                                                              "],

 
   [
   // level go here
   ],
   [
   // level go here
   ],
   [
   // level go here
   ],





];

if (typeof module != "undefined" && module.exports)
  module.exports = GAME_LEVELS;
