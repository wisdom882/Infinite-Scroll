## 1. Getting started

### 1.1. Installation

The package is pip installable:
```bash
pip install gym-simplifiedtetris
```

Or, you can copy the repository by forking it and then download it using:

```bash
git clone https://github.com/INSERT-YOUR-USERNAME-HERE/gym-simplifiedtetris
```

Packages can be installed using pip:

```bash
cd gym-simplifiedtetris
pip install -r requirements.txt
```

Here is a list of dependencies:

- NumPy
- Gym
- OpenCV-Python
- Imageio
- Matplotlib
- Pillow
- Stable-Baselines3

### 1.2. Usage

The file [example.py](https://github.com/OliverOverend/gym-simplifiedtetris/blob/master/example.py) shows an example of using an instance of the `simplifiedtetris-binary-v0` environment for ten games:

```python
import gym

import gym_simplifiedtetris

env = gym.make('simplifiedtetris-binary-v0')
obs = env.reset()

# Run 10 games of Tetris, selecting actions uniformly at random.
num_episodes = 0
while num_episodes < 10:
    env.render()
    action = env.action_space.sample()
    obs, rwd, done, info = env.step(action)

    if done:
        print(f"Episode {num_episodes + 1} has terminated.")
        num_episodes += 1
        obs = env.reset()

env.close()
```

Alternatively, you can import the environment directly:

```python
from gym_simplifiedtetris.envs import SimplifiedTetrisBinaryEnv as Tetris

env = Tetris(
    grid_dims=(20, 10),
    piece_size=4,
)
```

## 2. Environments

### 2.1. Available environments

There are three environments provided:

- `simplifiedtetris-binary-v0`: The observation space is a flattened NumPy array containing a binary representation of the grid, plus the current piece's ID. A reward of +1 is given for each line cleared, and 0 otherwise
- `simplifiedtetris-partbinary-v0`: The observation space is a flattened NumPy array containing a binary representation of the grid excluding the top `piece_size` rows, plus the current piece's ID. A reward of +1 is given for each line cleared, and 0 otherwise
- `simplifiedtetris-binary-shaped-v0`: The observation space is a flattened NumPy array containing a binary representation of the grid, plus the current piece's ID. The reward function is a potential-based reward function based on the _holes_ feature