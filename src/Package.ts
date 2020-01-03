/**
 * Specified what items to include or exclude from the package.
 *
 * @export
 * @interface Package
 */
export interface Package {
    artifact?: string;
    include?: string[];
    exclude?: string[];
    individually?: boolean;
    excludeDevDependencies?: boolean;
}