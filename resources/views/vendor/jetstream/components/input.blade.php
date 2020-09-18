@props(['disabled' => false])

<input {{ $disabled ? 'disabled' : '' }} {!! $attributes->merge(['class' => 'form-input rounded-md shadow-sm dark:text-gray-300 dark:bg-gray-700 dark:border-gray-700']) !!}>
