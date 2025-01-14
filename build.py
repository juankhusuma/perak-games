import subprocess
import os
import shutil
from pathlib import Path

from ghp_import import ghp_import

cwd = Path(".").absolute()
clumsy_dir = Path("clumsy-bird").absolute()
tetris_dir = Path("react-tetris").absolute()
pacman_dir = Path("pacman-js").absolute()
typeracer_dir = Path("typeracer").absolute()
bad_apple_dir = Path("bad-canvas2d").absolute()
snake_nokia_dir = Path("snake-nokia").absolute()
snake_2023_dir = Path("snake-2023").absolute()
snake_vite_dir = Path("snake-vite").absolute()
result_dir = Path("result").absolute()

# Flappy Bird
# flappy_dir = result_dir / "flappybird"

# if result_dir.exists():
#     shutil.rmtree(result_dir)

# os.chdir(clumsy_dir)

# res = subprocess.run("npx grunt-cli", shell=True)
# res.check_returncode()

# os.chdir(cwd)
# result_dir.mkdir()
# flappy_dir.mkdir()
# (flappy_dir / "js").mkdir()

# copy_dirs = ["bower_components", "build", "data"]
# for dir in copy_dirs:
#     shutil.copytree(clumsy_dir / dir, flappy_dir / dir)

# copy_files = ["app.json", "humans.txt", "index.css", "index.html", "js/melonJS-min.js"]
# for f in copy_files:
#     shutil.copy(clumsy_dir / f, flappy_dir / f)


# TETRIS
os.chdir(tetris_dir)
# res = subprocess.run("npm run build:lib", shell=True)
# res.check_returncode()

# res = subprocess.run("npm run build:app", shell=True)
# res.check_returncode()

# shutil.copytree(tetris_dir / "dist", result_dir / "tetris")
# shutil.copy(tetris_dir / "src" / "index.html", result_dir / "tetris" / "index.html")

# PACMAN
# os.chdir(pacman_dir)
# res = subprocess.run("npx gulp", shell=True)
# res.check_returncode()

# copy_dirs = ["bower_components", "build", "app"]
# for dir in copy_dirs:
#     shutil.copytree(pacman_dir / dir, result_dir / "pacman" / dir)
# shutil.copy(pacman_dir / "index.html", result_dir / "pacman" / "index.html")

# Typeracer
os.chdir(typeracer_dir)
res = subprocess.run("yarn build", shell=True)
res.check_returncode()

shutil.copytree(typeracer_dir / "dist", result_dir / "typeracer")

# Bad Apple!!
# (result_dir / "bad-apple").mkdir()
# copied_files = [
#     "index.html",
#     "index.js",
#     "style.css",
#     "audio.ogg",
#     "frames.gz",
#     "lyrics.json",
# ]
# for fname in copied_files:
#     shutil.copyfile(bad_apple_dir / fname, result_dir / "bad-apple" / fname)

# Snake Nokia
(result_dir / "snake-nokia").mkdir()
copied_files = [
    "index.html",
    "main.js",
    "styles.css",
    "nokiafc22.ttf",
]
for fname in copied_files:
    shutil.copyfile(snake_nokia_dir / fname, result_dir / "snake-nokia" / fname)

# Snake 2023
shutil.copytree(snake_2023_dir, result_dir / "snake-2023")

# Snake Vite
shutil.copytree(snake_vite_dir, result_dir / "snake-vite")

os.chdir(cwd)
ghp_import(
    "result",
    mesg="Import from cmd",
    nojekyll=True,
    push=True,
)

shutil.rmtree(result_dir)
