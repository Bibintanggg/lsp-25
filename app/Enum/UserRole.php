<?php

namespace App\Enum;

enum UserRole: int
{
    case ADMIN = 1;
    case SISWA = 2;

    public function label(): string
    {
        return match ($this) {
            self::ADMIN => "Admin",
            self::SISWA => "Siswa",
        };
    }
}