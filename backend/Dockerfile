FROM python:3.13-slim

WORKDIR /app

# Copy source code
COPY . .

# Install system dependencies for cryptography
RUN apt-get update && apt-get install -y \
    gcc \
    python3-dev \
    && rm -rf /var/lib/apt/lists/*

# Install Poetry
RUN pip install poetry

# Add Poetry to PATH
ENV PATH="/root/.local/bin:$PATH"

COPY pyproject.toml poetry.lock ./
RUN poetry install

CMD ["poetry", "run", "python", "launch.py"]
