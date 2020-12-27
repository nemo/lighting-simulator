#pragma once
#include <vector>

class Controller;
class Pattern;

class Runner {
public:
  Runner(Controller &controller, std::vector<Pattern*> patterns): controller_(controller), patterns_(patterns) {}

  void perform();

private:
  Controller& controller_;
  std::vector<Pattern*> patterns_;
  int numDone_ = 0;
};
