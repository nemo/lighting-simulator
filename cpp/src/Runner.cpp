#include "Runner.h"
#include "Controller.h"
#include "Pattern.h"

void Runner::perform() {
  while (true) {
    for (auto p: patterns_) {
      if (!p->tick()) {
        numDone_++;
      }
    }
    controller_.tick();
    if (numDone_ == patterns_.size()) {
      break;
    }
  }
}
