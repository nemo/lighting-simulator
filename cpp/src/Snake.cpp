#include "Snake.h"
#include "Controller.h"
#include "Color.h"

bool Snake::tick() {
  if (x_ == widthBoundry()) {
    y_++;
    forward_ = !forward_;
  }

  // Check if done
  if (y_ > controller_.getHeight()) {
    return false;
  }

  progress();

  controller_.setLED(x_, y_, {255, 100, 100});
  return true;
}


void Snake::progress() {
  x_ += forward_ ? 1 : -1;
}
