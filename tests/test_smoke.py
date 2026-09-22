"""Smoke test: TS entry points exist and parse; package scripts are consistent."""
import json
import subprocess
from pathlib import Path

ROOT = Path(__file__).parent.parent


def test_ts_entries_exist():
    for f in ("src/index.ts", "src/producers/eventProducer.ts",
              "src/consumers/eventConsumer.ts", "src/config/index.ts"):
        assert (ROOT / f).exists(), f"{f} missing"


def test_ts_files_parse():
    files = sorted((ROOT / "src").rglob("*.ts"))
    assert files, "no ts files found"
    for f in files:
        r = subprocess.run(["node", "--check", str(f)], capture_output=True, text=True)
        assert r.returncode == 0, f"{f}: {r.stderr}"


def test_package_json_consistent():
    pkg = json.loads((ROOT / "package.json").read_text())
    assert pkg["main"] == "dist/index.js"
    assert "build" in pkg["scripts"]
