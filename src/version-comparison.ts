/**
 * @system publish-registry
 * @status handwritten
 * @edit pure semver comparison (no network, no I/O) — the ONLY non-fetch operation in the primitive, kept out of the fetch group so unrelated concerns are not coupled under one canonical unit
 */
import { semver } from "bun";

/** Is a tag's version ahead of the registry's published version? */
export function isTagAheadOfRegistry(
	tagVersion: string,
	publishedVersion: string | null,
): boolean {
	return publishedVersion === null || semver.order(tagVersion, publishedVersion) > 0;
}