#include "Firework.h"
#include "Controller.h"
#include "Color.h"

bool Firework::tick() {
  if (currentRadius_ >= maxRadius_) {
    return false;
  }

  controller_.setLED(x_, y_, {100, 200, 50});

  for (int i = 1; i < currentRadius_; i++) {
    // Q1
    controller_.setLED(x_ - i, y_ + i, {100, 200, 50});
    // Q2
    controller_.setLED(x_ - i, y_ - i, {100, 200, 50});
    // Q3
    controller_.setLED(x_ + i, y_ - i, {100, 200, 50});
    // Q4
    controller_.setLED(x_ + i, y_ + i, {100, 200, 50});
  }
  currentRadius_++;
  return true;
}
