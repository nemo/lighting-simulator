#pragma once
#include "Color.h"
#include "Pattern.h"

class Snake : public Pattern {

  using Pattern::Pattern;

  bool tick();

  int widthBoundry() const {
		return forward_ ? controller_.getWidth() - 1 : 0;
	}

private:

  void progress();

  int x_ = 0;
  int y_ = 0;
  int forward_ = true;
};
