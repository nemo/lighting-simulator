#pragma once

#include "Controller.h"

class Simulator : public Controller
{
public:
	Simulator() {}
	~Simulator() {}

	void setLED(int x, int y, Color color) override;

	void tick() override;

	int getHeight() const override {
		return 40;
	}

	int getWidth() const override {
		return 40;
	}

private:
	int newTicks = 0;
};
