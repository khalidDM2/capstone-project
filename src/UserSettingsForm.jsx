import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';

const userSettingsSchema = z.object({
  fullName: z.string().trim().min(1, 'Full name is required.'),
  email: z
    .string()
    .trim()
    .min(1, 'Email is required.')
    .email('Enter a valid email address.'),
  notificationsEnabled: z.boolean(),
});

function UserSettingsForm({ onSave }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(userSettingsSchema),
    defaultValues: {
      fullName: '',
      email: '',
      notificationsEnabled: false,
    },
  });

  return (
    <section className="settings-card" aria-labelledby="settings-heading">
      <header className="settings-header">
        <p className="eyebrow">Account preferences</p>
        <h1 id="settings-heading">User settings</h1>
        <p className="intro">Manage your profile and notification preferences.</p>
      </header>

      <form
        className="settings-form"
        noValidate
        onSubmit={handleSubmit((values) => onSave?.(values))}
      >
        <div className="field">
          <label htmlFor="full-name">Full Name</label>
          <input
            id="full-name"
            type="text"
            autoComplete="name"
            aria-label="Full Name"
            aria-invalid={Boolean(errors.fullName)}
            aria-describedby={errors.fullName ? 'full-name-error' : undefined}
            {...register('fullName')}
          />
          {errors.fullName && (
            <p className="field-error" id="full-name-error" role="alert">
              {errors.fullName.message}
            </p>
          )}
        </div>

        <div className="field">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="email"
            aria-label="Email"
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? 'email-error' : undefined}
            {...register('email')}
          />
          {errors.email && (
            <p className="field-error" id="email-error" role="alert">
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="notification-setting">
          <div>
            <label htmlFor="notifications">Notifications</label>
            <p id="notifications-description">
              Receive updates and important account notifications.
            </p>
          </div>
          <input
            id="notifications"
            type="checkbox"
            aria-label="Enable notifications"
            aria-describedby="notifications-description"
            {...register('notificationsEnabled')}
          />
        </div>

        <button className="save-button" type="submit" disabled={isSubmitting}>
          Save settings
        </button>
      </form>
    </section>
  );
}

export default UserSettingsForm;
