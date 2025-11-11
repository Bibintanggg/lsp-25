<?php

namespace App\Http\Middleware;

use Closure;
use Illuminate\Http\Request;
use App\Enum\UserRole;
use Symfony\Component\HttpFoundation\Response;

class RoleMiddleware
{
    /**
     * Handle an incoming request.
     *
     * @param  \Closure(\Illuminate\Http\Request): (\Symfony\Component\HttpFoundation\Response)  $next
     */
    public function handle(Request $request, Closure $next, ...$roles)
    {
        $user = $request->user();

        if (!$user) {
            abort(401);
        }

        $allowedRoles = array_map("intval", $roles);

        $userRoleValue = $user->role->value;

        if (!in_array($userRoleValue, $allowedRoles, true)) {
            abort(403);
        }

        return $next($request);
    }
}
