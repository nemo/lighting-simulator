#pragma once

#include "Color.h"

class Controller {
public:

	virtual ~Controller() {}

	virtual void setLED(int x, int y, Color color) = 0;

	virtual void tick() = 0;

	virtual int getHeight() const = 0;

	virtual int getWidth() const = 0;

};
