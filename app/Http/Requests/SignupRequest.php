<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Password;

class SignupRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, mixed>
     */
    public function rules()
    {
        return [
            'name' => 'required|string|max:50',
            'email' => 'required|email|unique:users,email',
            'password' => [
                'required',
                'min:8',      // Minimum length of 8 characters
                'regex:/[a-zA-Z]/',   // At least one letter
                'regex:/[0-9]/',       // At least one digit
                'regex:/[!@#$%^&*(),.?":{}|<>]/',  // At least one symbol
            ],
        ];
    }
}
