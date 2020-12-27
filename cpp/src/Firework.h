#include "Pattern.h"

class Controller;

class Firework: public Pattern {
public:
  Firework(Controller &controller, int x, int y): Pattern(controller), x_(x), y_(y) {}

  bool tick();

private:
  int x_, y_, maxRadius_ = 5, currentRadius_ = 1;
};
