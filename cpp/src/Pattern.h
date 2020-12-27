#pragma once
#include "Controller.h"

class Pattern {
public:
  Pattern(Controller& controller): controller_(controller) {}

  virtual bool tick() = 0;

protected:
  Controller &controller_;
};
